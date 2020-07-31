import {ProposalSourceType} from '../proposal-source-type';
import {ProposalJournalSourceDocumentImpl} from './proposal-journal-source-document-impl';

export class ProposalJournalSourceDocumentBuilder {
  type?: ProposalSourceType;
  author?: string;
  title?: string;
  page?: string;
  passageTitle?: string;
  publishingDate?: string;
  buildBlankJournalSource() {
    this.type = ProposalSourceType.Journal;
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
