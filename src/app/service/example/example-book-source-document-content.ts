import {ExampleSourceDocumentContent} from './example-source-document-content';
import {BehaviorSubject, Subject} from 'rxjs';

export abstract class ExampleBookSourceDocumentContent extends ExampleSourceDocumentContent {
  public readonly pageObservable = new BehaviorSubject<number>(undefined);
  public readonly initialPublishingYearObservable = new BehaviorSubject<number>(undefined);
  public readonly publishedYearObservable = new BehaviorSubject<number>(undefined);
  public readonly publishedPlaceObservable = new BehaviorSubject<string>('');
  constructor(
    author: string,
    title: string,
    protected _page: number,
    protected _initialPublishingYear: number,
    protected _publishedYear: number,
    protected _publishedPlace: string
  ) {
    super('book', author, title);
  }
  public get page() {
    return this._page;
  }
  public set page(newPage: number) {
    if (this._page !== newPage) {
      this._page = newPage;
      this.pageObservable.next(newPage);
    }
  }
  public get initialPublishingYear() {
    return this._initialPublishingYear;
  }
  public set initialPublishingYear(newInitialPublishingYear: number) {
    if (this._initialPublishingYear !== newInitialPublishingYear) {
      this._initialPublishingYear = newInitialPublishingYear;
      this.initialPublishingYearObservable.next(newInitialPublishingYear);
    }
  }
  public get publishedYear() {
    return this._publishedYear;
  }
  public set publishedYear(newPublishedYear: number) {
    if (this._publishedYear !== newPublishedYear) {
      this._publishedYear = newPublishedYear;
      this.publishedYearObservable.next(newPublishedYear);
    }
  }
  public get publishedPlace() {
    return this._publishedPlace;
  }
  public set publishedPlace(newPublishedPlace: string) {
    if (this._publishedPlace !== newPublishedPlace) {
      this._publishedPlace = newPublishedPlace;
      this.publishedPlaceObservable.next(newPublishedPlace);
    }
  }
}
