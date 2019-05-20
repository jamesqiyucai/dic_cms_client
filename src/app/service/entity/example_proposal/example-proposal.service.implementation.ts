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

@Injectable()
export class ExampleProposalServiceImplementation implements ExampleProposalService {
  private _proposals: Array<ExampleProposalServiceModel>;
  private _exampleProposals: BehaviorSubject<List<ExampleProposalServiceModel>>;
  public readonly types: ExampleProposalServiceModelTypesFactory;
  public readonly exampleProposals: Observable<List<ExampleProposalServiceModel>>;

  constructor(
    @Inject(EXAMPLE_PROPOSAL_DATA_SERVICE) private exampleProposalDataService: ExampleProposalDataService,
    @Inject(EXAMPLE_PROPOSAL_SERV_ID_SERVICE) private identifierService: ExampleProposalServiceIdentifierService,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this.types = new ExampleProposalServiceModelTypesFactory();
    this.init();
    this.exampleProposals = this._exampleProposals.asObservable();
  }

  private init() {
    this._proposals = [];
    this._exampleProposals = new BehaviorSubject<List<ExampleProposalServiceModel>>(List(this._proposals));
  }

  private getProposal(identifier: number): ExampleProposalServiceModel {
    return this._proposals.find(proposal => proposal.identifier === identifier);
  }

  private getProposalIndex(identifier: number): number {
    return this._proposals.findIndex(proposal => proposal.identifier === identifier);
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
      .subscribe(proposal => {
        const i = this._proposals.findIndex(model => model.id === proposal.id);
        if (i !== -1) {
          const proposalToUpdate = this._proposals[i];
          proposalToUpdate.purpose = ExampleProposalPurposeServiceModelTypes.review;
          proposalToUpdate.status = proposal.status;
          proposalToUpdate.exampleId = proposal.exampleId;
          proposalToUpdate.version = proposal.version;
          proposalToUpdate.text = proposal.text;
          proposalToUpdate.italic = List(proposal.format.italic);
          proposalToUpdate.translations = List(proposal.translations);
          proposalToUpdate.keywords = List(proposal.keywords);
          proposalToUpdate.note = proposal.note;
          proposalToUpdate.comment = proposal.comment;
          proposalToUpdate.source = proposal.source;
        } else {
          this._proposals.push(
            new ExampleProposalServiceModel(
              this.identifierService.getId(),
              ExampleProposalPurposeServiceModelTypes.review,
              proposal.id,
              proposal.initiator,
              proposal.status,
              proposal.exampleId,
              proposal.version,
              proposal.text,
              List(proposal.format.italic),
              List(proposal.translations),
              List(proposal.keywords),
              proposal.note,
              proposal.comment,
              proposal.source,
              this,
              ));
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
    },
    ): void {
    const proposalToUpdate = this._proposals[this.getProposalIndex(identifier)];
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
          proposalToSubmit.source = data.source;
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
        proposalToApprove.source = data.source;
      });
  }

  public rejectExampleProposal(identifier: number) {
    const proposalToReject = this.getProposal(identifier);
    this.exampleProposalDataService.rejectProposal(proposalToReject.id)
      .pipe(
        mergeMap(() => this.exampleProposalDataService.get(proposalToReject.id))
      )
      .subscribe((data) => {
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
        proposalToReject.source = data.source;
      });
  }
}
