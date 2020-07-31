import {InjectionToken} from '@angular/core';
import {ProposalSourceDocument} from './proposal-source-document';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';


export interface ProposalSourceSerializerService {
  getProposalSourceDocument(response: ProposalSourceResourceContent): ProposalSourceDocument;
}

export const PROPOSAL_SOURCE_SERIALIZER_SERVICE = new InjectionToken<ProposalSourceSerializerService>('ProposalSourceSerializerService');
