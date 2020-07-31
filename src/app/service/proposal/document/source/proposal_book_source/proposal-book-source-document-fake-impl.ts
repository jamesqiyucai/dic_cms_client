import {ProposalBookSourceHandle} from './proposal-book-source-handle';
import {ProposalSourceDocumentFakeImpl} from '../proposal-source-document-fake-impl';
import {BehaviorSubject, Observable} from 'rxjs';

export class ProposalBookSourceDocumentFakeImpl extends ProposalSourceDocumentFakeImpl implements ProposalBookSourceHandle {
  constructor() {
    super();
  }
  initialPublishingYear = '';
  initialPublishingYearObservable = new BehaviorSubject<string>('').asObservable();
  page = '';
  pageObservable = new BehaviorSubject<string>('').asObservable();
  publishedPlace = '';
  publishedPlaceObservable = new BehaviorSubject<string>('').asObservable();
  publishedYear = '';
  publishedYearObservable = new BehaviorSubject<string>('').asObservable();
}
