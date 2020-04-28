import {ProposalSourceHandle} from './proposal-source-handle';
import {Observable} from 'rxjs';

export interface ProposalJournalSourceHandle extends ProposalSourceHandle {
  page: string;
  pageObservable: Observable<string>;
  passageTitle: string;
  passageTitleObservable: Observable<string>;
  publishingDate: string;
  publishingDateObservable: Observable<string>;
}
