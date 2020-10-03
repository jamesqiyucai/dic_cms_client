import {ProposalJournalSourceDocumentImpl} from './proposal-journal-source-document-impl';
import {SourceType} from '../../../../../source-type';

export class ProposalJournalSourceDocumentBuilder {
  type?: SourceType;
  author?: string;
  title?: string;
  page?: string;
  passageTitle?: string;
  publishingDate?: string;
  buildBlankJournalSource() {
    this.type = SourceType.Journal;
    this.author = '';
    this.title = '';
    this.page = '';
    this.passageTitle = '';
    this.publishingDate = '';
    return new ProposalJournalSourceDocumentImpl(this);
  }
  buildJournalSourceWithCurrentState() {
    return new ProposalJournalSourceDocumentImpl(this);
  }
}
