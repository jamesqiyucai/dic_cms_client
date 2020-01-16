import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceResourceRequest} from './proposal-source-resource-request';

export interface ProposalSourceDocument extends ProposalSourceHandle {
  mapToRequest(): ProposalSourceResourceRequest;
}
