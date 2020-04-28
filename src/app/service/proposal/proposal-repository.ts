import {ProposalHandle} from './proposal-handle';
import {InjectionToken} from '@angular/core';

export interface ProposalRepository {
  createBlankProposal(): ProposalHandle;
}

export const PROPOSAL_REPOSITORY = new InjectionToken<ProposalRepository>('proposal repository');
