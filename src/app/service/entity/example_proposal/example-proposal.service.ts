import {Observable} from 'rxjs';
import {ExampleProposalServiceModel} from '../../model/example_proposal/example-proposal.service.model';
import {List} from 'immutable';
import {ExampleProposalPurposeServiceModelTypes} from '../../model/example_proposal/example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../../model/example_source/example-source.service.model.types';
import {ExampleProposalServiceModelTypesFactory} from '../../model/example_proposal/example-proposal.service.model.types.factory';

export interface ExampleProposalService {
  types: ExampleProposalServiceModelTypesFactory;
  exampleProposals: Observable<List<ExampleProposalServiceModel>>;

  createExampleProposalInService(
    exampleId: number,
    version: number,
    text: string,
    italic: Array<[number, number]>,
    translations: Array<string>,
    keywords: Array<string>,
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
      publishingDate?: string,
    }
  ): number;

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
      type: ExampleSourceServiceModelTypes,
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
