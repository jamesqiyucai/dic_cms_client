import {ProposalTranslationHandle} from './proposal-translation-handle';

export interface ProposalTranslationFactory {
  getProposalTranslation(): ProposalTranslationHandle;
}
