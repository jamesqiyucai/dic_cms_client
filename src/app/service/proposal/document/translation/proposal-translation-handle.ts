import {Observable} from 'rxjs';

export interface ProposalTranslationHandle {
  text: string;
  textObservable: Observable<string>;
}
