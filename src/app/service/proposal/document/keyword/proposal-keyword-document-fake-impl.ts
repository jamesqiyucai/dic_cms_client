import {ProposalKeywordHandle} from './proposal-keyword-handle';
import {Observable} from 'rxjs';

export class ProposalKeywordDocumentFakeImpl implements ProposalKeywordHandle {
  keyword = '';
  keywordObservable = new Observable<any>();
}
