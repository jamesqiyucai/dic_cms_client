import {ProposalBookSourceHandle} from './proposal-book-source-handle';
import {ProposalSourceDocumentFakeImpl} from '../proposal-source-document-fake-impl';
import {BehaviorSubject, Observable} from 'rxjs';

export class ProposalBookSourceDocumentFakeImpl extends ProposalSourceDocumentFakeImpl implements ProposalBookSourceHandle {
  constructor() {
    super();
  }
  initialPublishingYear = '';
  initialPublishYear$ = new BehaviorSubject<string>('').asObservable();
  page = '';
  page$ = new BehaviorSubject<string>('').asObservable();
  publishedPlace = '';
  publishPlace$ = new BehaviorSubject<string>('').asObservable();
  publishedYear = '';
  publishYear$ = new BehaviorSubject<string>('').asObservable();
}
