import {AbstractExampleProposalSourceComponentModel} from '../abstract-example-proposal-source-component-model';
import {BehaviorSubject} from 'rxjs';
import {ProposalSourceType} from '../../../../service/proposal';
import {ProposalJournalSourceHandle} from '../../../../service/proposal';

export class ExampleProposalJournalSourceComponentModel extends AbstractExampleProposalSourceComponentModel {
  private _handle?: ProposalJournalSourceHandle;
  private _author: string;
  private readonly _author$: BehaviorSubject<string>;
  private _title: string;
  private readonly _title$: BehaviorSubject<string>;
  private _page: string;
  private readonly _page$: BehaviorSubject<string>;
  private _passageTitle: string;
  private readonly _passageTitle$: BehaviorSubject<string>;
  private _publishDate: string;
  private readonly _publishDate$: BehaviorSubject<string>;
  constructor(handle?: ProposalJournalSourceHandle) {
    super(ProposalSourceType.Journal);
    if (handle) {
      this._handle = handle;
      this._handle.authorObservable.subscribe(author => this.author = author);
      this._handle.titleObservable.subscribe(title => this.title = title);
      this._handle.pageObservable.subscribe(page => this.page = page);
      this._handle.passageTitleObservable.subscribe(passageTitle => this.passageTitle = passageTitle);
      this._handle.publishingDateObservable.subscribe(date => this.publishDate = date);
    }
    this._author = '';
    this._author$ = new BehaviorSubject<string>('');
    this._title = '';
    this._title$ = new BehaviorSubject<string>('');
    this._page = '';
    this._page$ = new BehaviorSubject<string>('');
    this._passageTitle = '';
    this._passageTitle$ = new BehaviorSubject<string>('');
    this._publishDate = '';
    this._publishDate$ = new BehaviorSubject<string>('');

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
  public get passageTitle$() {
    return this._passageTitle$.asObservable();
  }
  public set passageTitle(newPassageTitle: string) {
    if (this._passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
      this._passageTitle$.next(newPassageTitle);
    }
  }
  public get publishDate$() {
    return this._publishDate$.asObservable();
  }
  public set publishDate(newPublishDate: string) {
    if (this._publishDate !== newPublishDate) {
      this._publishDate = newPublishDate;
      this._publishDate$.next(newPublishDate);
    }
  }
}