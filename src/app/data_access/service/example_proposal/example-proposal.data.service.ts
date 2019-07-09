import {ExampleProposalData} from '../../dto/example-proposal.data';
import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ServerErrorListener} from '../../server-error-listener';

export interface ExampleProposalDataService {
  makeExampleProposalData(
    id: number,
    initiator: number,
    reviewer: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    italic: List<[number, number]>,
    translations: List<string>,
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
  ): ExampleProposalData;

  get(id: number): Observable<ExampleProposalData>;

  post(entity: ExampleProposalData): Observable<number>;

  getProposalsByReviewer(reviewer: number): Observable<Array<number>>;

  approveProposal(id: number): Observable<any>;

  rejectProposal(id: number): Observable<any>;

  injectServerErrorListener(listener: ServerErrorListener): void;

}
