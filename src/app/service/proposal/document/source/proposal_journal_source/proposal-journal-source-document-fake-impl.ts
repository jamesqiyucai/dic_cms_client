import {ProposalSourceDocumentFakeImpl} from '../proposal-source-document-fake-impl';
import {ProposalJournalSourceHandle} from './proposal-journal-source-handle';
import {Observable} from 'rxjs';

export class ProposalJournalSourceDocumentFakeImpl extends ProposalSourceDocumentFakeImpl implements ProposalJournalSourceHandle {
  constructor() {
    super();
  }
  page = '';
  page$ = new Observable<string>();
  passageTitle = '';
  passageTitle$ = new Observable<string>();
  publishDate = '';
  publishingDate$ = new Observable<string>();
}
