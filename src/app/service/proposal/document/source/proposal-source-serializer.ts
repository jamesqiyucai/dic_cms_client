import {ProposalSourceDocument} from './proposal-source-document';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export interface ProposalSourceSerializer {
  getSourceDocument(response: ProposalSourceResourceContent): undefined | ProposalSourceDocument;
}
