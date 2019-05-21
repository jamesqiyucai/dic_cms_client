import {InjectionToken} from '@angular/core';
import {ExampleProposalDataService} from './example-proposal.data.service';

export const EXAMPLE_PROPOSAL_DATA_SERVICE = new InjectionToken<ExampleProposalDataService>('ExampleProposalDataServiceImplementation')
