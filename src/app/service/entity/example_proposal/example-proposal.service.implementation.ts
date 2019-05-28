import {Inject, Injectable} from '@angular/core';
import {ExampleProposalService} from './example-proposal.service';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {ExampleProposalServiceModel} from '../../model/example_proposal/example-proposal.service.model';
import {EXAMPLE_PROPOSAL_SERV_ID_SERVICE} from '../../../core/example_proposal_serv_id/injection-token';
import {ExampleProposalServiceIdentifierService} from '../../../core/example_proposal_serv_id/example-proposal-serv-id-service.interface';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {List} from 'immutable';
import {ExampleProposalPurposeServiceModelTypes} from '../../model/example_proposal/example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../../model/example_source/example-source.service.model.types';
import {ExampleProposalServiceModelTypesFactory} from '../../model/example_proposal/example-proposal.service.model.types.factory';
import {EXAMPLE_PROPOSAL_DATA_SERVICE} from '../../../data_access/service/example_proposal/injection-token';
import {ExampleProposalDataService} from '../../../data_access/service/example_proposal/example-proposal.data.service';
import {map, mergeAll, mergeMap} from 'rxjs/operators';
import {ExampleSourceBookServiceModel} from '../../model/example_source/example-source-book.service.model';
import {ExampleSourceJournalServiceModel} from '../../model/example_source/example-source-journal.service.model';

@Injectable()
export class ExampleProposalServiceImplementation implements ExampleProposalService {
  private readonly _proposals: Array<ExampleProposalServiceModel>;
  private readonly _exampleProposals: BehaviorSubject<List<ExampleProposalServiceModel>>;
  public readonly types: ExampleProposalServiceModelTypesFactory;
  public readonly exampleProposals: Observable<List<ExampleProposalServiceModel>>;

  constructor(
    @Inject(EXAMPLE_PROPOSAL_DATA_SERVICE) private exampleProposalDataService: ExampleProposalDataService,
    @Inject(EXAMPLE_PROPOSAL_SERV_ID_SERVICE) private identifierService: ExampleProposalServiceIdentifierService,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this.types = new ExampleProposalServiceModelTypesFactory();
    this._proposals = [];
    this._exampleProposals = new BehaviorSubject<List<ExampleProposalServiceModel>>(List(this._proposals));
    this.exampleProposals = this._exampleProposals.asObservable();
  }

  private getProposal(identifier: number): ExampleProposalServiceModel {
    return this._proposals.find(proposal => proposal.identifier === identifier);
  }

  public isBook(source: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel): source is ExampleSourceBookServiceModel {
    return (<ExampleSourceBookServiceModel>source).type === 'book';
  }

  public isJournal(source: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel): source is ExampleSourceJournalServiceModel {
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
    const newProposal = new ExampleProposalServiceModel(
      this.identifierService.getId(),
      ExampleProposalPurposeServiceModelTypes.submit,
      null,
      this.userService.getCurrentUser(),
      null,
      exampleId,
      version,
      text,
      italic,
      translations,
      keywords,
      note,
      comment,
      source,
      this
    );
    this._proposals.push(newProposal);
    this.updateView();
    return newProposal.identifier;
  }

  public loadPendingProposalsInService(userId: number): void {
    this.exampleProposalDataService.getProposalsByReviewer(userId)
      .pipe(
        map(ids => from(ids)),
        mergeAll(),
        mergeMap(id => this.exampleProposalDataService.get(id))
      )
      .subscribe(data => {
        // if (data.source) {
        //   if (data.source.publishingDate) {
        //     const year = data.source.publishingDate.substring(0, 4);
        //     const month = data.source.publishingDate.substring(4, 6);
        //     const day = data.source.publishingDate.substring(6);
        //     data.source.publishingDate = `${year}-${month}-${day}`;
        //   }
        // }

        let sourceModel: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel = null;
        if (data.source) {
          switch (data.source.type) {
            case 'book': {
              sourceModel = new ExampleSourceBookServiceModel(
                data.source.author,
                data.source.title,
                data.source.page,
                data.source.initialPublishingYear,
                data.source.publishedYear,
                data.source.publishedPlace,
              );
              break;
            }
            case 'journal': {
              sourceModel = new ExampleSourceJournalServiceModel(
                data.source.author,
                data.source.title,
                data.source.pageNumber,
                data.source.publishingDate,
                data.source.passageTitle,
              );
              break;
            }
          }
        }

        const i = this._proposals.findIndex(model => model.id === data.id);
        if (i !== -1) {
          const proposalToUpdate = this._proposals[i];
          proposalToUpdate.purpose = ExampleProposalPurposeServiceModelTypes.review;
          proposalToUpdate.status = data.status;
          proposalToUpdate.exampleId = data.exampleId;
          proposalToUpdate.version = data.version;
          proposalToUpdate.text = data.text;
          proposalToUpdate.italic = List(data.format.italic);
          proposalToUpdate.translations = List(data.translations);
          proposalToUpdate.keywords = List(data.keywords);
          proposalToUpdate.note = data.note;
          proposalToUpdate.comment = data.comment;
          proposalToUpdate.source = sourceModel;
        } else {
          this._proposals.push(
            new ExampleProposalServiceModel(
              this.identifierService.getId(),
              ExampleProposalPurposeServiceModelTypes.review,
              data.id,
              data.initiator,
              data.status,
              data.exampleId,
              data.version,
              data.text,
              List(data.format.italic),
              List(data.translations),
              List(data.keywords),
              data.note,
              data.comment,
              data.source,
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
    source: ExampleSourceJournalServiceModel | ExampleSourceBookServiceModel,
    ): void {
    const proposalToUpdate = this.getProposal(identifier);
    proposalToUpdate.text = text;
    proposalToUpdate.italic = List(italic);
    proposalToUpdate.translations = List(translations);
    proposalToUpdate.keywords = List(keywords);
    proposalToUpdate.note = note;
    proposalToUpdate.comment = comment;
    proposalToUpdate.source = source;
  }

  public submitExampleProposal(identifier: number): void {
    const proposalToSubmit = this.getProposal(identifier);
    const proposalData = this.exampleProposalDataService.makeExampleProposalData(
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
    this.exampleProposalDataService.post(proposalData)
      .pipe(
        map(id => this.exampleProposalDataService.get(id)),
        mergeAll(),
      )
      .subscribe(
        (data) => {
          let sourceModel: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel = null;
          if (data.source) {
            switch (data.source.type) {
              case 'book': {
                sourceModel = new ExampleSourceBookServiceModel(
                  data.source.author,
                  data.source.title,
                  data.source.page,
                  data.source.initialPublishingYear,
                  data.source.publishedYear,
                  data.source.publishedPlace,
                );
                break;
              }
              case 'journal': {
                sourceModel = new ExampleSourceJournalServiceModel(
                  data.source.author,
                  data.source.title,
                  data.source.pageNumber,
                  data.source.publishingDate,
                  data.source.passageTitle,
                );
                break;
              }
            }
          }

          proposalToSubmit.id = data.id;
          proposalToSubmit.status = data.status;
          proposalToSubmit.exampleId = data.exampleId;
          proposalToSubmit.version = data.version;
          proposalToSubmit.text = data.text;
          proposalToSubmit.italic = List(data.format.italic);
          proposalToSubmit.translations = List(data.translations);
          proposalToSubmit.keywords = List(data.keywords);
          proposalToSubmit.note = data.note;
          proposalToSubmit.comment = data.comment;

          proposalToSubmit.source = sourceModel;
        }
      );
  }

  public approveExampleProposal(identifier: number) {
    const proposalToApprove = this.getProposal(identifier);
    this.exampleProposalDataService.approveProposal(proposalToApprove.id)
      .pipe(
        mergeMap(() => this.exampleProposalDataService.get(proposalToApprove.id))
      )
      .subscribe((data) => {
        if (data.source) {
          if (data.source.publishingDate) {
            const year = data.source.publishingDate.substring(0, 4);
            const month = data.source.publishingDate.substring(4, 6);
            const day = data.source.publishingDate.substring(6);
            data.source.publishingDate = `${year}-${month}-${day}`;
          }
        }
        let sourceModel: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel = null;
        if (data.source) {
          switch (data.source.type) {
            case 'book': {
              sourceModel = new ExampleSourceBookServiceModel(
                data.source.author,
                data.source.title,
                data.source.page,
                data.source.initialPublishingYear,
                data.source.publishedYear,
                data.source.publishedPlace,
              );
              break;
            }
            case 'journal': {
              sourceModel = new ExampleSourceJournalServiceModel(
                data.source.author,
                data.source.title,
                data.source.pageNumber,
                data.source.publishingDate,
                data.source.passageTitle,
              );
              break;
            }
          }
        }

        proposalToApprove.id = data.id;
        proposalToApprove.status = data.status;
        proposalToApprove.exampleId = data.exampleId;
        proposalToApprove.version = data.version;
        proposalToApprove.text = data.text;
        proposalToApprove.italic = List(data.format.italic);
        proposalToApprove.translations = List(data.translations);
        proposalToApprove.keywords = List(data.keywords);
        proposalToApprove.note = data.note;
        proposalToApprove.comment = data.comment;
        proposalToApprove.source = sourceModel;
      });
  }

  public rejectExampleProposal(identifier: number) {
    const proposalToReject = this.getProposal(identifier);
    this.exampleProposalDataService.rejectProposal(proposalToReject.id)
      .pipe(
        mergeMap(() => this.exampleProposalDataService.get(proposalToReject.id))
      )
      .subscribe((data) => {
        if (data.source) {
          if (data.source.publishingDate) {
            const year = data.source.publishingDate.substring(0, 4);
            const month = data.source.publishingDate.substring(4, 6);
            const day = data.source.publishingDate.substring(6);
            data.source.publishingDate = `${year}-${month}-${day}`;
          }
        }

        let sourceModel: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel = null;
        if (data.source) {
          switch (data.source.type) {
            case 'book': {
              sourceModel = new ExampleSourceBookServiceModel(
                data.source.author,
                data.source.title,
                data.source.page,
                data.source.initialPublishingYear,
                data.source.publishedYear,
                data.source.publishedPlace,
              );
              break;
            }
            case 'journal': {
              sourceModel = new ExampleSourceJournalServiceModel(
                data.source.author,
                data.source.title,
                data.source.pageNumber,
                data.source.publishingDate,
                data.source.passageTitle,
              );
              break;
            }
          }
        }
        proposalToReject.purpose = ExampleProposalPurposeServiceModelTypes.display;
        proposalToReject.status = data.status;
        proposalToReject.id = data.id;
        proposalToReject.status = data.status;
        proposalToReject.exampleId = data.exampleId;
        proposalToReject.version = data.version;
        proposalToReject.text = data.text;
        proposalToReject.italic = List(data.format.italic);
        proposalToReject.translations = List(data.translations);
        proposalToReject.keywords = List(data.keywords);
        proposalToReject.note = data.note;
        proposalToReject.comment = data.comment;


        proposalToReject.source = sourceModel;
      });
  }
}
