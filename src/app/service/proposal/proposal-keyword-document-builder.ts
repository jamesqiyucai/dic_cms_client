import {ProposalKeywordDocumentImpl} from './proposal-keyword-document-impl';
import {ProposalKeywordDocument} from './proposal-keyword-document';

export class ProposalKeywordDocumentBuilder {
  keyword?: string;
  buildBlankKeywordDocument(): ProposalKeywordDocument {
    this.keyword = '';
    return new ProposalKeywordDocumentImpl(this);
  }
  buildKeywordDocumentWithCurrentState(): ProposalKeywordDocument {
    return new ProposalKeywordDocumentImpl(this);
  }
}
