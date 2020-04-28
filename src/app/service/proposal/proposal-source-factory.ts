import {ProposalSourceType} from './proposal-source-type';
import {ProposalSourceHandle} from './proposal-source-handle';

export interface ProposalSourceFactory {
  getProposalSource(type: ProposalSourceType): ProposalSourceHandle;
}
