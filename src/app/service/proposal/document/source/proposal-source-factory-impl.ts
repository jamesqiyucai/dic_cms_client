import {ProposalSourceFactory} from './proposal-source-factory';
import {ProposalSourceHandle} from './proposal-source-handle';
import {SourceType} from '../../../../source-type';
import {ProposalJournalSourceDocumentBuilder} from './proposal_journal_source/proposal-journal-source-document-builder';
import {ProposalBookSourceDocumentBuilder} from './proposal_book_source/proposal-book-source-document-builder';

export class ProposalSourceFactoryImpl implements ProposalSourceFactory {
  public getProposalSource(type: SourceType): ProposalSourceHandle {
    if (type === SourceType.Journal) {
      const journalSourceBuilder = new ProposalJournalSourceDocumentBuilder();
      return journalSourceBuilder.buildBlankJournalSource();
    } else if (type === SourceType.Book) {
      const bookSourceBuilder = new ProposalBookSourceDocumentBuilder();
      return bookSourceBuilder.buildBlankBookSource();
    } else {
      throw new Error('invalid type, can not create corresponding source');
    }
  }
}
