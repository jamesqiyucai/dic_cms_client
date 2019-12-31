import {ExampleSourceDocumentContent} from './example-source-document-content';

export abstract class ExampleJournalSourceDocumentContent extends ExampleSourceDocumentContent {
  constructor(
    type: string,
    author: string,
    title: string,
    public page: number,
    public passageTitle: string,
    public publishingDate: string
  ) {
    super(type, author, title);
  }
}
