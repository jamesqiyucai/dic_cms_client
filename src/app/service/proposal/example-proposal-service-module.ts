import {NgModule} from '@angular/core';
import {PROPOSAL_REPOSITORY} from './proposal-repository';
import {ProposalRepositoryImpl} from './proposal-repository.impl';

@NgModule({
  providers: [{provide: PROPOSAL_REPOSITORY, useClass: ProposalRepositoryImpl}]
})
export class ExampleProposalServiceModule {}
