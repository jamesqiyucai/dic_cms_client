import {AbstractSource} from '../../../model/base_models/abstract-source.class';
import {EventEmitter} from '@angular/core';
import {ExampleSourceBookComponentDto} from '../example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source_journal/example-source-journal.component.dto';

export abstract class SourceComponent {
  public readonly dataChange: EventEmitter<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>;
  protected _unlocked: boolean;
  protected sourceModel: AbstractSource;

  protected constructor() {
    this.dataChange = new EventEmitter();
    this._unlocked = true;
  }

  abstract getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;

  abstract fillData(data: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto): void;

  public get unlocked() {
    return this._unlocked;
  }

  public get author() {
    return this.sourceModel.author;
  }

  public get title() {
    return this.sourceModel.title;
  }

  public unlock() {
    this._unlocked = true;
  }

  public lock() {
    this._unlocked = false;
  }

  public changeAuthor(newAuthor: string) {
    this.sourceModel.author = newAuthor;
    this.dataChange.emit(<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>this.getDto());
  }

  public changeTitle(newTitle: string) {
    this.sourceModel.title = newTitle;
    this.dataChange.emit(<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>this.getDto());
  }
}
