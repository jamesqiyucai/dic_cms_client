import {ProposalBookSourceDocument} from './proposal-book-source-document';
import {ProposalBookSourceResourceContent} from './proposal-book-source-resource-content';
import {ProposalSourceDocumentImpl} from '../proposal-source-document-impl';
import {BehaviorSubject} from 'rxjs';
import {ProposalBookSourceDocumentBuilder} from './proposal-book-source-document-builder';

export class ProposalBookSourceDocumentImpl extends ProposalSourceDocumentImpl implements ProposalBookSourceDocument {
  private _initialPublishingYear: string;
  private _initialPublishingYearObservable: BehaviorSubject<string>;
  private _page: string;
  private _pageObservable: BehaviorSubject<string>;
  private _publishedPlace: string;
  private _publishedPlaceObservable: BehaviorSubject<string>;
  private _publishedYear: string;
  private _publishedYearObservable: BehaviorSubject<string>;
  constructor(builder: ProposalBookSourceDocumentBuilder) {
    if (
      builder.type == null ||
      builder.author == null ||
      builder.page == null ||
      builder.title == null ||
      builder.initialPublishingYear == null ||
      builder.publishedPlace == null ||
      builder.publishedYear == null
    ) {
      throw new Error('Proposal source book properties must not be null or undefined');
    } else {
      super(builder.type, builder.author, builder.title);
      this._page = builder.page;
      this._initialPublishingYear = builder.initialPublishingYear;
      this._publishedPlace = builder.publishedPlace;
      this._publishedYear = builder.publishedYear;
      this._initialPublishingYearObservable = new BehaviorSubject<string>(builder.initialPublishingYear);
      this._pageObservable = new BehaviorSubject<string>(builder.page);
      this._publishedPlaceObservable = new BehaviorSubject<string>(builder.publishedPlace);
      this._publishedYearObservable = new BehaviorSubject<string>(builder.publishedYear);
    }
  }
  public get page$() {
    return this._pageObservable.asObservable();
  }
  public setPage(newPage: string) {
    if (this._page !== newPage) {
      this._page = newPage;
      this._pageObservable.next(newPage);
    }
  }
  public get initialPublishYear$() {
    return this._initialPublishingYearObservable.asObservable();
  }
  public setInitialPublishYear(newYear: string) {
    if (this._initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this._initialPublishingYearObservable.next(newYear);
    }
  }
  public get publishPlace$() {
    return this._publishedPlaceObservable.asObservable();
  }
  public setPublishPlace(newPlace: string) {
    if (this._publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this._publishedPlaceObservable.next(newPlace);
    }
  }
  public get publishYear$() {
    return this._publishedYearObservable.asObservable();
  }
  public setPublishYear(newYear: string) {
    if (this._publishedYear !== newYear) {
      this._publishedYear = newYear;
      this._publishedYearObservable.next(newYear);
    }
  }
  public mapToRequest(): ProposalBookSourceResourceContent {
    return {
      type: this._type,
      author: this._author,
      title: this._title,
      page: this._page,
      publishedPlace: this._publishedPlace,
      publishedYear: this._publishedYear,
      initialPublishingYear: this._initialPublishingYear
    };
  }
}
