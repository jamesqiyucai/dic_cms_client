import {ExampleBookSourceDocumentContent} from '../example';
import {ProposalBookSourceDocument} from './proposal-book-source-document';
import {ProposalSourceResourceRequest} from './proposal-source-resource-request';
import {ProposalBookSourceResourceRequest} from './proposal-book-source-resource-request';

export class ProposalBookSourceDocumentImpl extends ExampleBookSourceDocumentContent implements ProposalBookSourceDocument {
  mapToRequest(): ProposalSourceResourceRequest {
    const request = new ProposalBookSourceResourceRequest();
    request.type = this.getType();
    request.author = this.author;
    request.title = this.author;
    request.page = this.page;
    request.publishedPlace = this.publishedPlace;
    request.publishedYear = this.publishedYear;
    request.initialPublishingYear = this.initialPublishingYear;
    return request;
  }
}
