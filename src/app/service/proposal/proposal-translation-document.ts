import {ProposalHandle} from './proposal-handle';

export interface ProposalTranslationDocument extends ProposalHandle {
  $mark: string;
  setID(newID: number): any;
}
