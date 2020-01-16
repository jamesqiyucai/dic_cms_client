import {ExampleJournalSourceDocumentContent} from '../example';
import {ProposalJournalSourceDocument} from './proposal-journal-source-document';
import {ProposalSourceResourceRequest} from './proposal-source-resource-request';
import {ProposalJournalSourceResourceRequest} from './proposal-journal-source-resource-request';

export class ProposalJournalSourceDocumentImpl extends ExampleJournalSourceDocumentContent implements ProposalJournalSourceDocument {
  mapToRequest(): ProposalSourceResourceRequest {
    const request = new ProposalJournalSourceResourceRequest();
    request.type = this.getType();
    request.author = this.author;
    request.title = this.title;
    request.page = this.page;
    request.publishingDate = this.publishingDate;
    request.passageTitle = this.passageTitle;
    return request;
  }
}
