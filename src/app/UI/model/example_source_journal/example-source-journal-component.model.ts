import {AbstractSource} from '../base_models/abstract-source.class';

export class ExampleSourceJournalComponentModel extends AbstractSource {
  constructor(
    author: string,
    title: string,
    private _passageTitle: string,
    private _publishingDate: string,
    private _pageNumber: number
  ) {
    super('journal', author, title);
  }

  public get passageTitle() {
    return this._passageTitle;
  }

  public set passageTitle(newPassageTitle: string) {
    this._passageTitle = newPassageTitle;
  }

  public get pageNumber() {
    return this._pageNumber;
  }

  public set pageNumber(newNumber: number) {
    this._pageNumber = newNumber;
  }

  public get publishingDate() {
    return this._publishingDate;
  }

  public set publishingDate(newDate: string) {
    this._publishingDate = newDate;
  }
}
