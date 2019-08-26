import {FormatData} from './format.data';
import {BookSourceData} from './book-source.data';
import {JournalSourceData} from './journal-source.data';
import {TranslationData} from './translation.data';

export class ExampleProposalData {
  public id: number;
  public initiator: number;
  public reviewer: number;
  public status: string;
  public exampleId: number;
  public version: number;
  public text: string;
  public format: FormatData;
  public translations: Array<TranslationData>;
  public keywords: Array<string>;
  public note: string;
  public comment: string;
  public source: {
    type: string,
    author: string;
    title: string;
    page?: number;
    pageNumber?: number;
    initialPublishingYear?: number;
    publishedYear?: number;
    publishedPlace?: string;
    passageTitle?: string;
    publishingDate?: string;
  };

  constructor(
    id: number,
    initiator: number,
    reviewer: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    format: FormatData,
    translations: Array<TranslationData>,
    keywords: Array<string>,
    note: string,
    comment: string,
    source: BookSourceData | JournalSourceData,
  ) {
    this.id = id;
    this.initiator = initiator;
    this.reviewer = reviewer;
    this.status = status;
    this.exampleId = exampleId;
    this.version = version;
    this.text = text;
    this.format = format;
    this.translations = translations.map((content) => new TranslationData(null, content));
    this.keywords = keywords;
    this.note = note;
    this.comment = comment;
    this.source = source;
  }
}
