import {Observable} from 'rxjs';
import {ProposalSourceHandle} from '../proposal-source-handle';

export interface ProposalBookSourceHandle extends ProposalSourceHandle {
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
