import {ProposalKeywordHandle} from './proposal-keyword-handle';
import {Observable} from 'rxjs';

export class ProposalKeywordDocumentFakeImpl implements ProposalKeywordHandle {
  keyword = '';
  keyword$ = new Observable<any>();
}
