import {ProposalService} from '../proposal/proposal-service';

export interface ProposalHandle {
  submitProposal();
  approveProposal();
  rejectProposal();
}
