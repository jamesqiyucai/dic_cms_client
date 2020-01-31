import {ExampleSourceDocumentContent} from './example-source-document-content';
import {BehaviorSubject, Subject} from 'rxjs';

export abstract class ExampleBookSourceDocumentContent extends ExampleSourceDocumentContent {
  public readonly $page = new BehaviorSubject<number>(undefined);
  public readonly $initialPublishingYear = new BehaviorSubject<number>(undefined);
  public readonly $publishedYear = new BehaviorSubject<number>(undefined);
  public readonly $publishedPlace = new BehaviorSubject<string>('');
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
      this.$page.next(newPage);
    }
  }
  public get initialPublishingYear() {
    return this._initialPublishingYear;
  }
  public set initialPublishingYear(newInitialPublishingYear: number) {
    if (this._initialPublishingYear !== newInitialPublishingYear) {
      this._initialPublishingYear = newInitialPublishingYear;
      this.$initialPublishingYear.next(newInitialPublishingYear);
    }
  }
  public get publishedYear() {
    return this._publishedYear;
  }
  public set publishedYear(newPublishedYear: number) {
    if (this._publishedYear !== newPublishedYear) {
      this._publishedYear = newPublishedYear;
      this.$publishedYear.next(newPublishedYear);
    }
  }
  public get publishedPlace() {
    return this._publishedPlace;
  }
  public set publishedPlace(newPublishedPlace: string) {
    if (this._publishedPlace !== newPublishedPlace) {
      this._publishedPlace = newPublishedPlace;
      this.$publishedPlace.next(newPublishedPlace);
    }
  }
}
