import {FormatData} from './format.data';
import {SourceData} from './source.data';
import {BookSourceData} from './book-source.data';
import {JournalSourceData} from './journal-source.data';

export class ExampleProposalData {
  public id: number;
  public initiator: number;
  public reviewer: number;
  public status: string;
  public exampleId: number;
  public version: number;
  public text: string;
  public format: FormatData;
  public translations: Array<string>;
  public keywords: Array<string>;
  public note: string;
  public comment: string;
  public source: SourceData;

  constructor(
    id: number,
    initiator: number,
    reviewer: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    format: FormatData,
    translations: Array<string>,
    keywords: Array<string>,
    note: string,
    comment: string,
    source: {
      type: string,
      author: string;
      title: string;
      page: number;
      initialPublishingYear?: number;
      publishedYear?: number;
      publishedPlace?: string;
      passageTitle?: string;
      publishingDate?: string;
    },
  ) {
    this.id = id;
    this.initiator = initiator;
    this.reviewer = reviewer;
    this.status = status;
    this.exampleId = exampleId;
    this.version = version;
    this.text = text;
    this.format = format;
    this.translations = translations;
    this.keywords = keywords;
    this.note = note;
    this.comment = comment;
    switch (source.type) {
      case 'book': {
        this.source = new BookSourceData(
          source.author,
          source.title,
          source.page,
          source.initialPublishingYear,
          source.publishedYear,
          source.publishedPlace,
        );
        break;
      }
      case 'journal': {
        this.source = new JournalSourceData(
          source.author,
          source.title,
          source.passageTitle,
          source.publishingDate,
          source.page,
        );
        break;
      }
    }
  }
}
