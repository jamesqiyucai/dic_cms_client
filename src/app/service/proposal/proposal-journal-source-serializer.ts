import {ProposalJournalSourceDocumentBuilder} from './proposal-journal-source-document-builder';
import {ProposalSourceType} from './proposal-source-type';
import {ProposalSourceSerializer} from './proposal-source-serializer';
import {ProposalJournalSourceResourceContent} from './proposal-journal-source-resource-content';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export class ProposalJournalSourceSerializer implements ProposalSourceSerializer {
  public getSourceDocument(response: ProposalSourceResourceContent) {
    if (response.type !== ProposalSourceType.Journal) {
      return undefined;
    } else {
      const journalResponse = <ProposalJournalSourceResourceContent>response;
      const builder = new ProposalJournalSourceDocumentBuilder();
      builder.type = journalResponse.type;
      builder.author = journalResponse.author;
      builder.title = journalResponse.title;
      builder.page = journalResponse.page;
      builder.publishingDate = journalResponse.publishingDate;
      builder.passageTitle = journalResponse.passageTitle;
      return builder.buildJournalSourceWithCurrentState();
    }
  }
}
