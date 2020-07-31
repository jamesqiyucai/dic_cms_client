import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export interface ProposalSourceDocument extends ProposalSourceHandle {
  mapToRequest(): ProposalSourceResourceContent;
}
