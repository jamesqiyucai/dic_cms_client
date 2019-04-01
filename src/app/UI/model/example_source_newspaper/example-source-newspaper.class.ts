import {AbstractSource} from '../base_models/abstract-source.class';

export class ExampleSourceNewspaper extends AbstractSource {
  constructor(
    private _passageTitle: string,
    private _publishingYear: number,
    private _publishingMonth: number,
    private _publishingDay: number,
    private _pageNumber: number,
    author: string,
    title: string
  ) {
    super(author, title);
  }

  public get passageTitle() {
    return this._passageTitle;
  }

  public set passageTitle(newPassageTitle: string) {
    this._passageTitle = newPassageTitle;
  }

  public get publishingYear() {
    return this._publishingYear;
  }

  public set publishingYear(newYear: number) {
    this._publishingYear = newYear;
  }

  public get publishingMonth() {
    return this._publishingMonth;
  }

  public set publishingMonth(newMonth: number) {
    this._publishingMonth = newMonth;
  }

  public get publishingDay() {
    return this._publishingDay;
  }

  public set publishingDay(newDay: number) {
    this._publishingDay = newDay;
  }

  public get pageNumber() {
    return this._pageNumber;
  }

  public set pageNumber(newNumber: number) {
    this._pageNumber = newNumber;
  }
}
