import {ProposalHandle} from './proposal-handle';

export interface ProposalDocument extends ProposalHandle {
  initiator: number;
  version: number;
  reviewer: number;
  setID(newID: number): any;
}
