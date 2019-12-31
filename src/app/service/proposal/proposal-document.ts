import {ProposalHandle} from './proposal-handle';
import {Observable} from 'rxjs';

export interface ProposalDocument extends ProposalHandle {
  initiator: number;
  version: number;
  reviewer: number;
  setID(newID: number): any;
}
