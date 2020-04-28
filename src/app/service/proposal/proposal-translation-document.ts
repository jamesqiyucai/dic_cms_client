import {ProposalTranslationHandle} from './proposal-translation-handle';
import {Observable} from 'rxjs';

export interface ProposalTranslationDocument extends ProposalTranslationHandle {
  $mark: string;
  $markObservable: Observable<string>;
}
