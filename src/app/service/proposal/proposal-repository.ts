import {List} from 'immutable';
import {ProposalHandle} from './proposal-handle';
import {InjectionToken} from '@angular/core';

export interface ProposalRepository {
  pendingProposals: List<ProposalHandle>;
  createProposal(): ProposalHandle;
  loadPendingProposals();
}

export const PROPOSAL_REPOSITORY = new InjectionToken<ProposalRepository>('proposal repository');
