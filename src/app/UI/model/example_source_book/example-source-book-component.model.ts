import {AbstractSource} from '../base_models/abstract-source.class';

export class ExampleSourceBookComponentModel extends AbstractSource {
  constructor(
    author: string,
    title: string,
    private _page: number,
    private _initialPublishingYear: number,
    private _publishedYear: number,
    private _publishedPlace: string
  ) {
    super('book', author, title);
  }

  public get page() {
    return this._page;
  }

  public set page(newPage: number) {
    this._page = newPage;
  }

  public get initialPublishingYear() {
    return this._initialPublishingYear;
  }

  public set initialPublishingYear(newInitialPublishingYear: number) {
    this._initialPublishingYear = newInitialPublishingYear;
  }

  public get publishedYear() {
    return this._publishedYear;
  }

  public set publishedYear(newPublishedYear: number) {
    this._publishedYear = newPublishedYear;
  }

  public get publishedPlace() {
    return this._publishedPlace;
  }

  public set publishedPlace(newPublishedPlace: string) {
    this._publishedPlace = newPublishedPlace;
  }
}
