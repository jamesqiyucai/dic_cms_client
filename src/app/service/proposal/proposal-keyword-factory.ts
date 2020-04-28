import {ProposalKeywordHandle} from './proposal-keyword-handle';

export interface ProposalKeywordFactory {
  getProposalKeyword(): ProposalKeywordHandle;
}
