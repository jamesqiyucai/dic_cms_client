import {ProposalHandle} from '../proposal-handle';
import {InjectionToken} from '@angular/core';
import {REMOTE_RESOURCE_FACTORY} from '../../remote_resource/remote-resource-factory';
import {Observable} from 'rxjs';

export interface ProposalRepository {
  createBlankProposal(): ProposalHandle;
  loadPendingProposals(): Observable<any>;
}

export const PROPOSAL_REPOSITORY = new InjectionToken<ProposalRepository>('proposal repository');

(window as any).proposalRepo = PROPOSAL_REPOSITORY;
