import {ExampleProposalSourceModelImpl} from '../example-proposal-source-model-impl';
import {BehaviorSubject} from 'rxjs';
import {ProposalBookSourceHandle} from '../../../../service/proposal';
import {SourceType} from '../../../../source-type';
import {ExampleProposalEditorBookSourceModel} from './example-proposal-editor-book-source-model';

export class ExampleProposalEditorBookSourceModelImpl extends ExampleProposalSourceModelImpl implements ExampleProposalEditorBookSourceModel {
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
    super(SourceType.Book);
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
    this._handle.author$.subscribe(author => this.setAuthor(author));
    this._handle.title$.subscribe(title => this.setTitle(title));
    this._handle.page$.subscribe(page => this.setPage(page));
    this._handle.initialPublishYear$.subscribe(year => this.setInitialPublishYear(year));
    this._handle.publishYear$.subscribe(year => this.setPublishYear(year));
    this._handle.publishPlace$.subscribe(place => this.setPublishPlace(place));
  }
  public get author$() {
    return this._author$;
  }
  public setAuthor(newAuthor: string) {
    if (this._author !== newAuthor) {
      this._author = newAuthor;
      this._author$.next(newAuthor);
      this._handle.setAuthor(newAuthor);
    }
  }
  public get title$() {
    return this._title$;
  }
  public setTitle(newTitle: string) {
    if (this._title !== newTitle) {
      this._title = newTitle;
      this._title$.next(newTitle);
      this._handle.setTitle(newTitle);
    }
  }
  public get page$() {
    return this._page$;
  }
  public setPage(newPage: string) {
    if (this._page !== newPage) {
      this._page = newPage;
      this._page$.next(newPage);
      this._handle.setPage(newPage);
    }
  }
  public get initialPublishYear$() {
    return this._initialPublishingYear$;
  }
  public setInitialPublishYear(newYear: string) {
    if (this._initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this._initialPublishingYear$.next(newYear);
      this._handle.setInitialPublishYear(newYear);
    }
  }
  public get publishYear$() {
    return this._publishedYear$;
  }
  public setPublishYear(newYear: string) {
    if (this._publishedYear !== newYear) {
      this._publishedYear = newYear;
      this._publishedYear$.next(newYear);
      this._handle.setPublishYear(newYear);
    }
  }
  public get publishPlace$() {
    return this._publishedPlace$;
  }
  public setPublishPlace(newPlace: string) {
    if (this._publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this._publishedPlace$.next(newPlace);
      this._handle.setPublishPlace(newPlace);
    }
  }
}
