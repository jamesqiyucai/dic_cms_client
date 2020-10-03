import {ProposalSourceHandle} from '../proposal-source-handle';
import {Observable} from 'rxjs';

export interface ProposalJournalSourceHandle extends ProposalSourceHandle {
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishingDate$: Observable<string>;
  setPage(newPage: string): void;
  setPassageTitle(newTitle: string): void;
  setPublishDate(newDate: string): void;
}
