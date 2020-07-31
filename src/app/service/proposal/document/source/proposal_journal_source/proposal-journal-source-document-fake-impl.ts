import {ProposalSourceDocumentFakeImpl} from '../proposal-source-document-fake-impl';
import {ProposalJournalSourceHandle} from './proposal-journal-source-handle';
import {Observable} from 'rxjs';

export class ProposalJournalSourceDocumentFakeImpl extends ProposalSourceDocumentFakeImpl implements ProposalJournalSourceHandle {
  constructor() {
    super();
  }
  page = '';
  pageObservable = new Observable<string>();
  passageTitle = '';
  passageTitleObservable = new Observable<string>();
  publishingDate = '';
  publishingDateObservable = new Observable<string>();
}
