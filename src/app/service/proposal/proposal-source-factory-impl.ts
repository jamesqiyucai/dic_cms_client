import {ProposalSourceFactory} from './proposal-source-factory';
import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceType} from './proposal-source-type';
import {ProposalJournalSourceDocumentBuilder} from './proposal-journal-source-document-builder';
import {ProposalBookSourceDocumentBuilder} from './proposal-book-source-document-builder';

export class ProposalSourceFactoryImpl implements ProposalSourceFactory {
  public getProposalSource(type: ProposalSourceType): ProposalSourceHandle {
    if (type === ProposalSourceType.Journal) {
      const journalSourceBuilder = new ProposalJournalSourceDocumentBuilder();
      return journalSourceBuilder.buildBlankJournalSource();
    } else if (type === ProposalSourceType.Book) {
      const bookSourceBuilder = new ProposalBookSourceDocumentBuilder();
      return bookSourceBuilder.buildBlankBookSource();
    } else {
      throw new Error('invalid type, can not create corresponding source');
    }
  }
}
