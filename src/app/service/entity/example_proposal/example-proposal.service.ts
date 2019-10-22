import {Observable} from 'rxjs';
import {ExampleProposalServ} from '../../model/example_proposal/example-proposal-serv';
import {List} from 'immutable';
import {ExampleSourceServiceModelTypes} from '../../model/example_source/example-source.service.model.types';
import {ExampleProposalServiceModelTypesFactory} from '../../model/example_proposal/example-proposal.service.model.types.factory';
import {BookSourceService} from '../../book-source-service';
import {ExampleSourceJournalServiceModel} from '../../model/example_source/example-source-journal.service.model';

export interface ExampleProposalService {
  types: ExampleProposalServiceModelTypesFactory;
  exampleProposals: Observable<List<ExampleProposalServ>>;

  isBook(source: BookSourceService | ExampleSourceJournalServiceModel): source is BookSourceService;

  isJournal(source: BookSourceService | ExampleSourceJournalServiceModel): source is ExampleSourceJournalServiceModel;

  updateView(): void;

  createExampleProposalInService(
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
      publishingDate?: string,
    }
  ): number;

  loadPendingProposalsInService(userId: number): void;

  updateExampleProposalInService(
    identifier: number,
    text?: string,
    italic?: List<[number, number]>,
    translations?: List<string>,
    keywords?: List<string>,
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

  submitExampleProposal(identifier: number): void;

  approveExampleProposal(identifier: number);

  rejectExampleProposal(identifier: number);
}
