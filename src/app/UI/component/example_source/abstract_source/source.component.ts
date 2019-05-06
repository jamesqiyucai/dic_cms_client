import {AbstractSource} from '../../../model/base_models/abstract-source.class';
import {ExampleSourceBookComponentModel} from '../../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceJournalComponentModel} from '../../../model/example_source_journal/example-source-journal-component.model';
import {EventEmitter} from '@angular/core';

export abstract class SourceComponent {
  public readonly dataChange: EventEmitter<ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel>;
  protected _unlocked: boolean;
  protected sourceData: AbstractSource;

  protected constructor() {
    this.dataChange = new EventEmitter();
  }

  abstract fillData(data: ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel): void;

  public get unlocked() {
    return this._unlocked;
  }

  public get author() {
    return this.sourceData.author;
  }

  public get title() {
    return this.sourceData.title;
  }

  public unlock() {
    this._unlocked = true;
  }

  public lock() {
    this._unlocked = false;
  }

  public changeAuthor(newAuthor: string) {
    this.sourceData.author = newAuthor;
    this.dataChange.emit(<ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel>this.sourceData);
  }

  public changeTitle(newTitle: string) {
    this.sourceData.title = newTitle;
    this.dataChange.emit(<ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel>this.sourceData);
  }
}
