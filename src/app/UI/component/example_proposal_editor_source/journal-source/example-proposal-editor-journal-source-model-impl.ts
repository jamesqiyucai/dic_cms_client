import {ExampleProposalSourceModelImpl} from '../example-proposal-source-model-impl';
import {BehaviorSubject} from 'rxjs';
import {ProposalJournalSourceHandle} from '../../../../service/proposal';
import {SourceType} from '../../../../source-type';
import {ExampleProposalEditorJournalSourceModel} from './example-proposal-editor-journal-source-model';

export class ExampleProposalEditorJournalSourceModelImpl extends ExampleProposalSourceModelImpl implements ExampleProposalEditorJournalSourceModel {
  private _handle: ProposalJournalSourceHandle;
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
  constructor(handle: ProposalJournalSourceHandle) {
    super(SourceType.Journal);
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
    this._handle = handle;
    this._handle.author$.subscribe(author => this.setAuthor(author));
    this._handle.title$.subscribe(title => this.setTitle(title));
    this._handle.page$.subscribe(page => this.setPage(page));
    this._handle.passageTitle$.subscribe(passageTitle => this.setPassageTitle(passageTitle));
    this._handle.publishingDate$.subscribe(date => this.setPublishDate(date));

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
  public get passageTitle$() {
    return this._passageTitle$;
  }
  public setPassageTitle(newPassageTitle: string) {
    if (this._passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
      this._passageTitle$.next(newPassageTitle);
      this._handle.setPassageTitle(newPassageTitle);
    }
  }
  public get publishDate$() {
    return this._publishDate$;
  }
  public setPublishDate(newPublishDate: string) {
    if (this._publishDate !== newPublishDate) {
      this._publishDate = newPublishDate;
      this._publishDate$.next(newPublishDate);
      this._handle.setPublishDate(newPublishDate);
    }
  }
}
