import {ProposalEditorHandle} from '../proposal-editor-handle';
import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export interface ProposalRepository {
  createBlankProposal(): ProposalEditorHandle;
  loadPendingProposals(): Observable<ProposalEditorHandle[]>;
}

export const PROPOSAL_REPOSITORY = new InjectionToken<ProposalRepository>('proposal repository');

(window as any).proposalRepo = PROPOSAL_REPOSITORY;
