import {ProposalJournalSourceDocument} from './proposal-journal-source-document';
import {ProposalJournalSourceResourceContent} from './proposal-journal-source-resource-content';
import {ProposalSourceDocumentImpl} from './proposal-source-document-impl';
import {BehaviorSubject} from 'rxjs';
import {ProposalJournalSourceDocumentBuilder} from './proposal-journal-source-document-builder';

export class ProposalJournalSourceDocumentImpl extends ProposalSourceDocumentImpl implements ProposalJournalSourceDocument {
  private _page: string;
  private _pageObservable: BehaviorSubject<string>;
  private _passageTitle: string;
  private _passageTitleObservable: BehaviorSubject<string>;
  private _publishingDate: string;
  private _publishingDateObservable: BehaviorSubject<string>;
  constructor(builder: ProposalJournalSourceDocumentBuilder) {
    if (builder.type && builder.author && builder.title && builder.page && builder.publishingDate && builder.passageTitle) {
      super(builder.type, builder.author, builder.title);
      this._page = builder.page;
      this._pageObservable = new BehaviorSubject<string>(builder.page);
      this._passageTitle = builder.passageTitle;
      this._passageTitleObservable = new BehaviorSubject<string>(builder.passageTitle);
      this._publishingDate = builder.publishingDate;
      this._publishingDateObservable = new BehaviorSubject<string>(builder.publishingDate);
    } else {
      throw new Error('Proposal journal source document properties should not be null or undefined');
    }
  }
  public get pageObservable() {
    return this._pageObservable.asObservable();
  }
  public set page(newPage: string) {
    if (this._page !== newPage) {
      this._page = newPage;
      this._pageObservable.next(newPage);
    }
  }
  public get passageTitleObservable() {
    return this._passageTitleObservable.asObservable();
  }
  public set passageTitle(newTitle: string) {
    if (this._passageTitle !== newTitle) {
      this._passageTitle = newTitle;
      this._passageTitleObservable.next(newTitle);
    }
  }
  public get publishingDateObservable() {
    return this._publishingDateObservable.asObservable();
  }
  public set publishingDate(newDate: string) {
    if (this._publishingDate !== newDate) {
      this._publishingDate = newDate;
      this._publishingDateObservable.next(newDate);
    }
  }
  mapToRequest(): ProposalJournalSourceResourceContent {
    return {
      type: this._type,
      author: this._author,
      title: this._title,
      page: this._page,
      passageTitle: this._passageTitle,
      publishingDate: this._publishingDate
    };
  }
}
