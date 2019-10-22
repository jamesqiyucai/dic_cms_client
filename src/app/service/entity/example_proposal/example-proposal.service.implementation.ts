import {Inject, Injectable} from '@angular/core';
import {ExampleProposalService} from './example-proposal.service';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {ExampleProposalServ} from '../../model/example_proposal/example-proposal-serv';
import {EXAMPLE_PROPOSAL_SERV_ID_SERVICE} from '../../../core/example_proposal_serv_id/injection-token';
import {ExampleProposalServiceIdentifierService} from '../../../core/example_proposal_serv_id/example-proposal-serv-id-service.interface';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {List} from 'immutable';
import {ExampleProposalPurposeServiceModelTypes} from '../../model/example_proposal/example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../../model/example_source/example-source.service.model.types';
import {ExampleProposalServiceModelTypesFactory} from '../../model/example_proposal/example-proposal.service.model.types.factory';
import {map, mergeAll, mergeMap} from 'rxjs/operators';
import {BookSourceService} from '../../book-source-service';
import {ExampleSourceJournalServiceModel} from '../../model/example_source/example-source-journal.service.model';
import {REMOTE_RESOURCES_FACTORY} from '../../../data_access/remote_resource_factory/injection-token';
import {RemoteResourcesFactory} from '../../../data_access/remote_resource_factory/remote-resources-factory';
import {RemoteResource} from '../../../data_access/remote_resource_factory/remote-resource';
import {ExampleProposalData} from './dto/example-proposal.data';
import {ExampleProposalExceptionTranslator} from '../../../data_access/example_proposal/example-proposal-exception-translator';
import {BookSourceData} from './dto/book-source.data';
import {JournalSourceData} from './dto/journal-source.data';
import {FormatData} from './dto/format.data';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BlockedProposalException} from '../../../data_access/example_proposal/blocked-proposal.exception';
import {ExampleProposalTranslationModel} from '../../model/example_proposal/example-proposal-translation.model';
import {SourceData} from './dto/source.data';

@Injectable()
export class ExampleProposalServiceImplementation implements ExampleProposalService {
  private exampleProposalExceptionTranslator = new ExampleProposalExceptionTranslator();
  private remoteProposals: RemoteResource;
  private readonly _proposals: Array<ExampleProposalServ>;
  private readonly _exampleProposals: BehaviorSubject<List<ExampleProposalServ>>;
  public readonly types: ExampleProposalServiceModelTypesFactory;
  public readonly exampleProposals: Observable<List<ExampleProposalServ>>;

  constructor(
    @Inject(REMOTE_RESOURCES_FACTORY) private remoteResourcesFactory: RemoteResourcesFactory,
    @Inject(EXAMPLE_PROPOSAL_SERV_ID_SERVICE) private identifierService: ExampleProposalServiceIdentifierService,
    @Inject(USER_SERVICE) private userService: UserService,
    private http: HttpClient,
  ) {
    this.remoteProposals = remoteResourcesFactory.bind('/api/proposals', this.exampleProposalExceptionTranslator);
    this.types = new ExampleProposalServiceModelTypesFactory();
    this._proposals = [];
    this._exampleProposals = new BehaviorSubject<List<ExampleProposalServ>>(List(this._proposals));
    this.exampleProposals = this._exampleProposals.asObservable();
  }

  private static makeExampleProposalData(
    id: number,
    initiator: number,
    reviewer: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    italic: List<[number, number]>,
    translations: List<ExampleProposalTranslationModel>,
    keywords: List<string>,
    note: string,
    comment: string,
    source: {
      type: string;
      author?: string;
      title?: string;
      page?: number;
      initialPublishingYear?: number;
      publishedYear?: number;
      publishedPlace?: string;
      passageTitle?: string;
      publishingDate?: string;
    },
  ) {
    // create corresponding source
    let newSource = null;
    if (source) {
      switch (source.type) {
        case 'book': {
          newSource = new BookSourceData(
            source.author,
            source.title,
            source.page,
            source.initialPublishingYear,
            source.publishedYear,
            source.publishedPlace,
          );
          break;
        }
        case 'journal': {
          newSource = new JournalSourceData(
            source.author,
            source.title,
            source.passageTitle,
            source.publishingDate ? source.publishingDate.replace(/-/g, '') : null,
            source.page,
          );
          break;
        }
      }
    }
    return new ExampleProposalData(
      id,
      initiator,
      reviewer,
      status,
      exampleId,
      version,
      text,
      new FormatData(italic.toArray()),
      translations.toArray(),
      keywords.toArray(),
      note,
      comment,
      newSource,
    );
  }

  private getProposal(identifier: number): ExampleProposalServ {
    return this._proposals.find(proposal => proposal.identifier === identifier);
  }

  private getProposalsByReviewer(reviewer: number) {
    const params = new HttpParams().set('reviewer', reviewer.toString());
    return this.http.get(`/api/proposals`, {params: params}) as Observable<Array<number>>;
  }

  private approveProposal(id: number) {
    return this.remoteResourcesFactory.bind(`/api/proposals/${id}/approve`, this.exampleProposalExceptionTranslator).post<number, any>(id);
    // return this.http.post(`/api/proposals/${id}/approve`, null) as Observable<any>;
  }

  private rejectProposal(id: number) {
    return this.http.post(`/api/proposals/${id}/reject`, null) as Observable<any>;
  }

  private updateModelWithRemoteProposal(data: ExampleProposalData, model: ExampleProposalServ): void {
    model.id = data.id;
    model.status = data.status;
    model.exampleId = data.exampleId;
    model.version = data.version;
    model.text = data.text;
    model.italic = List(data.format.italic);
    model.translations = List(data.translations).map(translation => new ExampleProposalTranslationModel(translation.id, translation.text));
    model.keywords = List(data.keywords);
    model.note = data.note;
    model.comment = data.comment;
    model.source = this.makeSourceModelFromData(data.source);

  }

  private makeSourceModelFromData(source: SourceData) {
    let sourceModel: BookSourceService | ExampleSourceJournalServiceModel = null;
    if (source) {
      switch (source.type) {
        case 'book': {
          sourceModel = new BookSourceService(
            source.author,
            source.title,
            (source as BookSourceData).page,
            (source as BookSourceData).initialPublishingYear,
            (source as BookSourceData).publishedYear,
            (source as BookSourceData).publishedPlace,
          );
          break;
        }
        case 'journal': {
          sourceModel = new ExampleSourceJournalServiceModel(
            source.author,
            source.title,
            (source as JournalSourceData).pageNumber,
            (source as JournalSourceData).publishingDate,
            (source as JournalSourceData).passageTitle,
          );
          break;
        }
      }
    }
    return sourceModel;
  }

  public isBook(source: BookSourceService | ExampleSourceJournalServiceModel): source is BookSourceService {
    return (<BookSourceService>source).type === 'book';
  }

  public isJournal(source: BookSourceService | ExampleSourceJournalServiceModel): source is ExampleSourceJournalServiceModel {
    return (<ExampleSourceJournalServiceModel>source).type === 'journal';
  }

  public updateView() {
    this._exampleProposals.next(List(this._proposals));
  }

  public createExampleProposalInService(
    exampleId: number,
    version: number,
    text: string,
    italic: List<[number, number]>,
    translations: List<string>,
    keywords: List<string>,
    note: string,
    comment: string,
    source: {
      type: ExampleSourceServiceModelTypes,
      author: string,
      title: string,
      page: number,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
      passageTitle?: string,
      publishingDate?: string
    }
    ): number {

    const newProposal = new ExampleProposalServ(
      this.identifierService.getId(),
      ExampleProposalPurposeServiceModelTypes.submit,
      null,
      this.userService.getCurrentUser(),
      null,
      exampleId,
      version,
      text,
      italic,
      translations.map(t => new ExampleProposalTranslationModel(null, t)),
      keywords,
      note,
      comment,
      this.makeSourceModelFromData(source),
      this
    );
    this._proposals.push(newProposal);
    this.updateView();
    return newProposal.identifier;
  }

  public loadPendingProposalsInService(userId: number): void {
    this.getProposalsByReviewer(userId)
      .pipe(
        map(ids => from(ids)),
        mergeAll(),
        mergeMap(id => this.remoteProposals.get<ExampleProposalData>(id))
      )
      .subscribe(data => {
        const i = this._proposals.findIndex(model => model.id === data.id);
        if (i !== -1) {
          const proposalToUpdate = this._proposals[i];
          proposalToUpdate.purpose = ExampleProposalPurposeServiceModelTypes.review;
          proposalToUpdate.status = data.status;
          proposalToUpdate.exampleId = data.exampleId;
          proposalToUpdate.version = data.version;
          proposalToUpdate.text = data.text;
          proposalToUpdate.italic = List(data.format.italic);
          proposalToUpdate.translations = List(data.translations).map(t => new ExampleProposalTranslationModel(t.id, t.text));
          proposalToUpdate.keywords = List(data.keywords);
          proposalToUpdate.note = data.note;
          proposalToUpdate.comment = data.comment;
          proposalToUpdate.source = this.makeSourceModelFromData(data.source);
        } else {
          this._proposals.push(
            new ExampleProposalServ(
              this.identifierService.getId(),
              ExampleProposalPurposeServiceModelTypes.review,
              data.id,
              data.initiator,
              data.status,
              data.exampleId,
              data.version,
              data.text,
              List(data.format.italic),
              List(data.translations).map(t => new ExampleProposalTranslationModel(t.id, t.text)),
              List(data.keywords),
              data.note,
              data.comment,
              this.makeSourceModelFromData(data.source),
              this,
              ));
          this._exampleProposals.next(List(this._proposals));
        }});
  }

  public updateExampleProposalInService(
    identifier: number,
    text: string,
    italic: List<[number, number]>,
    translations: List<string>,
    keywords: List<string>,
    note: string,
    comment: string,
    source: ExampleSourceJournalServiceModel | BookSourceService,
    ): void {
    const proposalToUpdate = this.getProposal(identifier);
    proposalToUpdate.text = text;
    proposalToUpdate.italic = List(italic);
    proposalToUpdate.translations = translations.map(translation => new ExampleProposalTranslationModel(null, translation));
    proposalToUpdate.keywords = List(keywords);
    proposalToUpdate.note = note;
    proposalToUpdate.comment = comment;
    proposalToUpdate.source = source;
  }

  public submitExampleProposal(identifier: number): void {
    const proposalToSubmit = this.getProposal(identifier);
    const proposalData = ExampleProposalServiceImplementation.makeExampleProposalData(
      proposalToSubmit.id,
      proposalToSubmit.initiator,
      this.userService.getCurrentUser(),
      proposalToSubmit.status,
      proposalToSubmit.exampleId,
      proposalToSubmit.version,
      proposalToSubmit.text,
      proposalToSubmit.italic,
      proposalToSubmit.translations,
      proposalToSubmit.keywords,
      proposalToSubmit.note,
      proposalToSubmit.comment,
      proposalToSubmit.source
    );
    this.remoteProposals.post<ExampleProposalData, number>(proposalData)
      .pipe(
        map(id => this.remoteProposals.get<ExampleProposalData>(id)),
        mergeAll(),
      )
      .subscribe(
        (data) => {
          this.updateModelWithRemoteProposal(data, proposalToSubmit);
        }
      );
  }

  public approveExampleProposal(identifier: number) {
    const proposalToApprove = this.getProposal(identifier);
    this.approveProposal(proposalToApprove.id)
      .pipe(
        mergeMap(() => this.remoteProposals.get<ExampleProposalData>(proposalToApprove.id))
      )
      .subscribe(
        (data) => {
          this.updateModelWithRemoteProposal(data, proposalToApprove);
        },
        error => {
          console.log(error);
          if (error instanceof BlockedProposalException) {
            alert('this proposal has already been approved');
            this._proposals.splice(this._proposals.findIndex(m => m.id === this.getProposal(identifier).id));
            this.updateView();
          }
        }
        );
  }

  public rejectExampleProposal(identifier: number) {
    const proposalToReject = this.getProposal(identifier);
    this.rejectProposal(proposalToReject.id)
      .pipe(
        mergeMap(() => this.remoteProposals.get<ExampleProposalData>(proposalToReject.id))
      )
      .subscribe((data) => {
        this.updateModelWithRemoteProposal(data, proposalToReject);
      });
  }
}
