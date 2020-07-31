import {NgModule} from '@angular/core';
import {PROPOSAL_REPOSITORY} from './repository/proposal-repository';
import {ProposalRepositoryImpl} from './repository/proposal-repository-impl';
import {PROPOSAL_SOURCE_SERIALIZER_SERVICE} from './document/source/proposal-source-serializer-service';
import {ProposalSourceSerializerServiceImpl} from './document/source/proposal-source-serializer-service-impl';

@NgModule({
  providers: [
    {provide: PROPOSAL_REPOSITORY, useClass: ProposalRepositoryImpl},
    {provide: PROPOSAL_SOURCE_SERIALIZER_SERVICE, useClass: ProposalSourceSerializerServiceImpl}
    ]
})
export class ExampleProposalServiceModule {}
