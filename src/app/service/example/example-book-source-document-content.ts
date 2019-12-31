import {ExampleSourceDocumentContent} from './example-source-document-content';

export abstract class ExampleBookSourceDocumentContent extends ExampleSourceDocumentContent {
  constructor(
    type: string,
    author: string,
    title: string,
    public page: number,
    public initialPublishingYear: number,
    public publishedYear: number,
    public publishedPlace: string
  ) {
    super(type, author, title);
  }
}
