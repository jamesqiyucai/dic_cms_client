import {Observable} from 'rxjs';

export interface ProposalTranslationHandle {
  readonly translation$: Observable<string>;
  setTranslation(newTranslation: string): void;
}
