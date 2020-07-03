import {AbstractExampleProposalSourceComponentModel} from '../abstract-example-proposal-source-component-model';
import {BehaviorSubject} from 'rxjs';
import {ProposalSourceType} from '../../../../service/proposal';
import {ProposalBookSourceHandle} from '../../../../service/proposal';

export class ExampleProposalBookSourceComponentModel extends AbstractExampleProposalSourceComponentModel {
  private _handle: ProposalBookSourceHandle;
  private _author: string;
  private readonly _author$: BehaviorSubject<string>;
  private _title: string;
  private readonly _title$: BehaviorSubject<string>;
  private _page: string;
  private readonly _page$: BehaviorSubject<string>;
  private _initialPublishingYear: string;
  private readonly _initialPublishingYear$: BehaviorSubject<string>;
  private _publishedYear: string;
  private readonly _publishedYear$: BehaviorSubject<string>;
  private _publishedPlace: string;
  private readonly _publishedPlace$: BehaviorSubject<string>;
  constructor(handle: ProposalBookSourceHandle) {
    super(ProposalSourceType.Book);
    this._author = '';
    this._author$ = new BehaviorSubject<string>('');
    this._title = '';
    this._title$ = new BehaviorSubject<string>('');
    this._page = '';
    this._page$ = new BehaviorSubject<string>('');
    this._initialPublishingYear = '';
    this._initialPublishingYear$ = new BehaviorSubject<string>('');
    this._publishedYear = '';
    this._publishedYear$ = new BehaviorSubject<string>('');
    this._publishedPlace = '';
    this._publishedPlace$ = new BehaviorSubject<string>('');
    this._handle = handle;
    this._handle.authorObservable.subscribe(author => this.author = author);
    this._handle.titleObservable.subscribe(title => this.title = title);
    this._handle.pageObservable.subscribe(page => this.page = page);
    this._handle.initialPublishingYearObservable.subscribe(year => this.initialPublishingYear = year);
    this._handle.publishedYearObservable.subscribe(year => this.publishedYear = year);
    this._handle.publishedPlaceObservable.subscribe(place => this.publishedPlace = place);
  }
  public get author$() {
    return this._author$.asObservable();
  }
  public set author(newAuthor: string) {
    if (this._author !== newAuthor) {
      this._author = newAuthor;
      this._author$.next(newAuthor);
      this._handle.author = this._author;
    }
  }
  public get title$() {
    return this._title$.asObservable();
  }
  public set title(newTitle: string) {
    if (this._title !== newTitle) {
      this._title = newTitle;
      this._title$.next(newTitle);
      this._handle.title = this._title;
    }
  }
  public get page$() {
    return this._page$.asObservable();
  }
  public set page(newPage: string) {
    if (this._page !== newPage) {
      this._page = newPage;
      this._page$.next(newPage);
      this._handle.page = this._page;
    }
  }
  public get initialPublishingYear$() {
    return this._initialPublishingYear$.asObservable();
  }
  public set initialPublishingYear(newYear: string) {
    if (this._initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this._initialPublishingYear$.next(newYear);
      this._handle.initialPublishingYear = this._initialPublishingYear;
    }
  }
  public get publishedYear$() {
    return this._publishedYear$.asObservable();
  }
  public set publishedYear(newYear: string) {
    if (this._publishedYear !== newYear) {
      this._publishedYear = newYear;
      this._publishedYear$.next(newYear);
      this._handle.publishedYear = this._publishedYear;
    }
  }
  public get publishedPlace$() {
    return this._publishedPlace$.asObservable();
  }
  public set publishedPlace(newPlace: string) {
    if (this._publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this._publishedPlace$.next(newPlace);
      this._handle.publishedPlace = this._publishedPlace;
    }
  }
}
