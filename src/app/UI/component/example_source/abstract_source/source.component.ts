import {EventEmitter} from '@angular/core';
import {ExampleSourceBookComponentDto} from '../example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source_journal/example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';

export abstract class SourceComponent {
  protected _type: ExampleSourceComponentTypes;
  protected _author = null;
  protected _title = null;
  protected _page: number;
  protected _unlocked: boolean;

  public readonly dataChange: EventEmitter<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>;

  protected constructor() {
    this.dataChange = new EventEmitter();
    this._unlocked = true;
  }

  protected abstract fireSourceDataChangeEvent();

  protected get unlocked() {
    return this._unlocked;
  }


  protected get type() {
    return this._type;
  }

  protected get author() {
    return this._author;
  }

  protected set author(newAuthor: string) {
    if (this.author !== newAuthor) {
      this._author = newAuthor;
      this.fireSourceDataChangeEvent();
    }
  }

  protected get title() {
    return this._title;
  }

  protected set title(newTitle: string) {
    if (this.title !== newTitle) {
      this._title = newTitle;
      this.fireSourceDataChangeEvent();
    }
  }

  protected get page() {
    return this._page;
  }

  protected set page(newPage: number) {
    if (this.page !== newPage) {
      this._page = newPage;
      this.fireSourceDataChangeEvent();
    }
  }

  protected onAuthorChange(newAuthor: string) {
    this.author = newAuthor;
  }

  protected onTitleChange(newTitle: string) {
    this.title = newTitle;
  }

  protected onPageChange(newPage: string) {
    this.page = Number(newPage);
  }

  public abstract getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;

  public abstract update(data: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto): void;

  public unlock() {
    this._unlocked = true;
  }

  public lock() {
    this._unlocked = false;
  }

}
