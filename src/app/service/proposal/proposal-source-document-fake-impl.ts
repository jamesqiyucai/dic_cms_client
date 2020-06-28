import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceType} from './proposal-source-type';
import {Observable} from 'rxjs';

export class ProposalSourceDocumentFakeImpl implements ProposalSourceHandle {
  author = '';
  authorObservable = new Observable<any>();
  title = '';
  titleObservable = new Observable<any>();
  getType(): ProposalSourceType {
    return ProposalSourceType.Journal;
  }
}
