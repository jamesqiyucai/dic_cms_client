import {ProposalBookSourceDocumentBuilder} from './proposal-book-source-document-builder';
import {ProposalSourceType} from './proposal-source-type';
import {ProposalSourceSerializer} from './proposal-source-serializer';
import {ProposalBookSourceResourceContent} from './proposal-book-source-resource-content';

export class ProposalBookSourceSerializer implements ProposalSourceSerializer {
  public getSourceDocument(response: ProposalBookSourceResourceContent) {
    if (response.type !== ProposalSourceType.Book) {
      return undefined;
    } else {
      const bookResponse = <ProposalBookSourceResourceContent>response;
      const builder = new ProposalBookSourceDocumentBuilder();
      builder.type = bookResponse.type;
      builder.author = bookResponse.author;
      builder.title = bookResponse.title;
      builder.page = bookResponse.page;
      builder.publishedYear = bookResponse.publishedYear;
      builder.publishedPlace = bookResponse.publishedPlace;
      builder.initialPublishingYear = bookResponse.initialPublishingYear;
      return builder.buildBookSourceWithCurrentState();
    }
  }
}
