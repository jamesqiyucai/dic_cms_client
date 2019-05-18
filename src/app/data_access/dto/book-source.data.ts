import {SourceData} from './source.data';

export class BookSourceData extends SourceData {
  public page: number;
  public initialPublishingYear: number;
  public publishedYear: number;
  public publishedPlace: string;

  constructor(author: string, title: string, page: number, initialPublishingYear: number, publishedYear: number, publishedPlace: string) {
    super('book', author, title);
    this.page = page;
    this.initialPublishingYear = initialPublishingYear;
    this.publishedYear = publishedYear;
    this.publishedPlace = publishedPlace;
  }
}
