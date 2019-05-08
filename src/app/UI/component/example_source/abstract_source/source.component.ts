import {AbstractSource} from '../../../model/base_models/abstract-source.class';
import {EventEmitter} from '@angular/core';
import {ExampleSourceBookComponentDto} from '../example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source_journal/example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';

export abstract class SourceComponent {
  protected _type: ExampleSourceComponentTypes;
  protected _author: string;
  protected _title: string;
  protected _page: number;



  public readonly dataChange: EventEmitter<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>;
  protected _unlocked: boolean;
  protected sourceModel: AbstractSource;

  protected constructor() {
    this.dataChange = new EventEmitter();
    this._unlocked = true;
  }

  protected abstract fireSourceDataChangeEvent();

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

  abstract getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;

  abstract update(data: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto): void;

  public get unlocked() {
    return this._unlocked;
  }


  public unlock() {
    this._unlocked = true;
  }

  public lock() {
    this._unlocked = false;
  }

  protected onAuthorChange(newAuthor: string) {
    this.author = newAuthor;
  }

  protected onTitleChange(newTitle: string) {
    this.title = newTitle;
  }

  protected onPageChange(newPage: number) {
    this.page = newPage;
  }
}
