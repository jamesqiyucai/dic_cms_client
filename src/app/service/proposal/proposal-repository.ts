import {Observable} from 'rxjs';
import {ProposalService} from './proposal-service';
import {List} from 'immutable';

export interface ProposalRepository {
  proposals: Observable<List<ProposalService>>;
  createProposal();
  loadPendingProposals(userID: number);
}
