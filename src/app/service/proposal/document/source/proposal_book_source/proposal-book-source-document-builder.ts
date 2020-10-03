import {ProposalBookSourceDocumentImpl} from './proposal-book-source-document-impl';
import {SourceType} from '../../../../../source-type';

export class ProposalBookSourceDocumentBuilder {
  type?: SourceType;
  author?: string;
  title?: string;
  page?: string;
  initialPublishingYear?: string;
  publishedYear?: string;
  publishedPlace?: string;
  buildBlankBookSource() {
    this.type = SourceType.Book;
    this.author = '';
    this.title = '';
    this.page = '';
    this.initialPublishingYear = '';
    this.publishedYear = '';
    this.publishedPlace = '';
    return new ProposalBookSourceDocumentImpl(this);
  }
  buildBookSourceWithCurrentState() {
    return new ProposalBookSourceDocumentImpl(this);
  }
}
