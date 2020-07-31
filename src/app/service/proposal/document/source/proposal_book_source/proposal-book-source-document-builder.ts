import {ProposalSourceType} from '../proposal-source-type';
import {ProposalBookSourceDocumentImpl} from './proposal-book-source-document-impl';

export class ProposalBookSourceDocumentBuilder {
  type?: ProposalSourceType;
  author?: string;
  title?: string;
  page?: string;
  initialPublishingYear?: string;
  publishedYear?: string;
  publishedPlace?: string;
  buildBlankBookSource() {
    this.type = ProposalSourceType.Book;
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
