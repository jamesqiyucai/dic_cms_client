import {Observable} from 'rxjs';
import {ExampleProposalServiceModel} from '../../model/example_proposal/example-proposal-service.model';
import {List} from 'immutable';
import {ExampleProposalPurpose} from '../../model/example_proposal/example-proposal.purpose';
import {ExampleProposalSourceType} from '../../model/example_proposal/example-proposal-source.type';
import {ExampleProposalServiceEnumsFactory} from '../../model/example_proposal/example-proposal-service-enums.factory';

export interface ExampleProposalService {
  enums: ExampleProposalServiceEnumsFactory;
  exampleProposals: Observable<List<ExampleProposalServiceModel>>;

  createNewExampleProposalInService(
    purpose: ExampleProposalPurpose,
    id: number,
    initiator: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    italic: Array<[number, number]>,
    translations: Array<string>,
    keywords: Array<string>,
    note: string,
    comment: string,
    source: {
      type: ExampleProposalSourceType,
      author: string,
      title: string,
      page: number,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
      passageTitle?: string,
      publishingDate?: string,
    }
  ): void;

  loadPendingProposalsInService(userId: number): void;

  updateExampleProposalInService(
    identifier: number,
    text?: string,
    italic?: Array<[number, number]>,
    translations?: Array<string>,
    keywords?: Array<string>,
    note?: string,
    comment?: string,
    source?: {
      type: ExampleProposalSourceType,
      author: string,
      title: string,
      page: number,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
      passageTitle?: string,
      publishingDate?: string,
    }
  ): void;

  removeExampleProposalInService(identifier: number): void;

  submitExampleProposal(identifier: number): void;

  approveExampleProposal(identifier: number);

  rejectExampleProposal(identifier: number);
}
