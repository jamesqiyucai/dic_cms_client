import {ProposalTranslationHandle} from './proposal-translation-handle';

export interface ProposalTranslationDocument extends ProposalTranslationHandle {
  $mark: string;
  setID(newID: number): any;
}
