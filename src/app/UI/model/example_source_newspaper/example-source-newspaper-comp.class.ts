import {AbstractSource} from '../base_models/abstract-source.class';

export class ExampleSourceNewspaperComp extends AbstractSource {
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

  private get publishingYear() {
    return this._publishingYear;
  }

  private set publishingYear(newYear: number) {
    this._publishingYear = newYear;
  }

  private get publishingMonth() {
    return this._publishingMonth;
  }

  private set publishingMonth(newMonth: number) {
    this._publishingMonth = newMonth;
  }

  private get publishingDay() {
    return this._publishingDay;
  }

  private set publishingDay(newDay: number) {
    this._publishingDay = newDay;
  }

  public get pageNumber() {
    return this._pageNumber;
  }

  public set pageNumber(newNumber: number) {
    this._pageNumber = newNumber;
  }

  public getPublishingDate() {
    return `${this.publishingYear}-${this.publishingMonth}-${this.publishingDay}`;
  }

  public dateChange(newDate: string) {
    const date = new Date(newDate);
    this.publishingYear = date.getFullYear();
    this.publishingMonth = date.getMonth();
    this.publishingDay = date.getDay();
  }
}
