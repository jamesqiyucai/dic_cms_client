import {AbstractProposalSourceComponentModel} from '../abstract-proposal-source-component-model';
import {BehaviorSubject} from 'rxjs';
import {ProposalSourceType} from '../../../../service/proposal/proposal-source-type';
import {ProposalBookSourceHandle} from '../../../../service/proposal';

export class ProposalBookSourceComponentModel extends AbstractProposalSourceComponentModel {
  private _handle: ProposalBookSourceHandle;
  private _author: string;
  private readonly _author$: BehaviorSubject<string>;
  private _title: string;
  private readonly _title$: BehaviorSubject<string>;
  private _page: string;
  private readonly _page$: BehaviorSubject<string>;
  private _initialPublishingYear: string;
  private readonly _initialPublishingYear$: BehaviorSubject<string>;
  private _publishedPlace: string;
  private readonly _publishedPlace$: BehaviorSubject<string>;
  constructor(handle: ProposalBookSourceHandle) {
    super(ProposalSourceType.Book);
    this._handle = handle;
    this._author = '';
    this._author$ = new BehaviorSubject<string>('');
    this._title = '';
    this._title$ = new BehaviorSubject<string>('');
    this._page = '';
    this._page$ = new BehaviorSubject<string>('');
    this._initialPublishingYear = '';
    this._initialPublishingYear$ = new BehaviorSubject<string>('');
    this._publishedPlace = '';
    this._publishedPlace$ = new BehaviorSubject<string>('');
  }
  public get author$() {
    return this._author$.asObservable();
  }
  public set author(newAuthor: string) {
    if (this._author !== newAuthor) {
      this._author = newAuthor;
      this._author$.next(newAuthor);
    }
  }
  public get title$() {
    return this._title$.asObservable();
  }
  public set title(newTitle: string) {
    if (this._title !== newTitle) {
      this._title = newTitle;
      this._title$.next(newTitle);
    }
  }
  public get page$() {
    return this._page$.asObservable();
  }
  public set page(newPage: string) {
    if (this._page !== newPage) {
      this._page = newPage;
      this._page$.next(newPage);
    }
  }
  public get initialPublishingYear$() {
    return this._initialPublishingYear$.asObservable();
  }
  public set initialPublishingYear(newYear: string) {
    if (this._initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this._initialPublishingYear$.next(newYear);
    }
  }
  public get publishedPlace$() {
    return this._publishedPlace$.asObservable();
  }
  public set publishedPlace(newPlace: string) {
    if (this._publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this._publishedPlace$.next(newPlace);
    }
  }
}
