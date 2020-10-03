import {SourceType} from '../../../../source-type';
import {ProposalSourceHandle} from './proposal-source-handle';

export interface ProposalSourceFactory {
  getProposalSource(type: SourceType): ProposalSourceHandle;
}
