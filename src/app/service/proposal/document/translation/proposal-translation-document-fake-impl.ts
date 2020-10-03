import {ProposalTranslationHandle} from './proposal-translation-handle';
import {Observable} from 'rxjs';

export class ProposalTranslationDocumentFakeImpl implements ProposalTranslationHandle {
  translation = '';
  translation$ = new Observable<any>();
}
