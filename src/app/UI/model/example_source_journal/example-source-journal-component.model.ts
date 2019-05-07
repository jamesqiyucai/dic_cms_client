import {AbstractSource} from '../base_models/abstract-source.class';
import {ExampleSourceComponentTypes} from '../../component/example_source/example-source.component.types';

export class ExampleSourceJournalComponentModel extends AbstractSource {
  constructor(
    author: string,
    title: string,
    private _passageTitle: string,
    private _publishingDate: string,
    private _page: number
  ) {
    super(ExampleSourceComponentTypes.journal, author, title);
  }

  public get passageTitle() {
    return this._passageTitle;
  }

  public set passageTitle(newPassageTitle: string) {
    this._passageTitle = newPassageTitle;
  }

  public get page() {
    return this._page;
  }

  public set page(newNumber: number) {
    this._page = newNumber;
  }

  public get publishingDate() {
    return this._publishingDate;
  }

  public set publishingDate(newDate: string) {
    this._publishingDate = newDate;
  }
}
