import {ProposalSourceDocument} from "./proposal-source-document";
import {ProposalBookSourceDocumentImpl} from "./proposal-book-source-document-impl";
import {ProposalJournalSourceDocumentImpl} from "./proposal-journal-source-document-impl";

export class ProposalSourceFactory {
  createSource(type: string): ProposalSourceDocument {
    if (type = 'book') {
      return new ProposalBookSourceDocumentImpl('', '', null, null, null, '');
    } else if (type = 'journal') {
      return new ProposalJournalSourceDocumentImpl('', '', null, '', '');
    }
  }
}
