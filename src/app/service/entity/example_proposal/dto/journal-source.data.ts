import {SourceData} from './source.data';

export class JournalSourceData extends SourceData {
  public passageTitle: string;
  public publishingDate: string;
  public pageNumber: number;

  constructor(author: string, title: string, passageTitle: string, publishingDate: string, pageNumber: number) {
    super('journal', author, title);
    this.passageTitle = passageTitle;
    this.publishingDate = publishingDate;
    this.pageNumber = pageNumber;
  }
}
