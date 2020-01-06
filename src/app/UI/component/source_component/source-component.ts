import {ProposalSourceHandle} from '../../../service/proposal';

export interface SourceComponent {
  sourceHandle: ProposalSourceHandle;
  lock(): any;
  unlock(): any;
}
