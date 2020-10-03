import {ProposalSourceHandle} from './proposal-source-handle';
import {SourceType} from '../../../../source-type';
import {Observable} from 'rxjs';

export class ProposalSourceDocumentFakeImpl implements ProposalSourceHandle {
  author = '';
  author$ = new Observable<any>();
  title = '';
  title$ = new Observable<any>();
  getType(): SourceType {
    return SourceType.Journal;
  }
}
