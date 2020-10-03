import {Observable} from 'rxjs';

export interface ProposalKeywordHandle {
  readonly keyword$: Observable<string>;
  setKeyword(newKeyWord: string): void;
}
