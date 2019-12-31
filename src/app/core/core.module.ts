import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {HttpClientModule} from '@angular/common/http';
import {USER_SERVICE} from './user/injection-token';
import {UserServiceImpl} from './user/user-service-impl';
import {EXAMPLE_SERV_ID_SERVICE} from './example_serv_id/injection-token';
import {ExampleServIdServiceImpl} from './example_serv_id/example-serv-id.service';
import {EXAMPLE_PROPOSAL_SERV_ID_SERVICE} from './example_proposal_serv_id/injection-token';
import {ExampleProposalServIdServiceImpl} from './example_proposal_serv_id/example-proposal-serv-id.service';
import {EXAMPLE_SERVICE} from '../service/entity/example/injection-token';
import {ExampleServiceImplementation} from '../service/entity/example/example.service.implementation';
import {EXAMPLE_PROPOSAL_SERVICE} from '../service/entity/example_proposal/injection-token';
import {ExampleProposalServiceImplementation} from '../service/entity/example_proposal/example-proposal.service.implementation';
import {REMOTE_RESOURCES_FACTORY} from '../data_access/remote_resource_factory/injection-token';
import {RemoteResourceFactoryImplementation} from '../data_access/remote_resource_factory/remote-resource-factory.implementation';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {provide: USER_SERVICE, useClass: UserServiceImpl},
    {provide: EXAMPLE_SERV_ID_SERVICE, useClass: ExampleServIdServiceImpl},
    {provide: EXAMPLE_SERVICE, useClass: ExampleServiceImplementation},
    {provide: EXAMPLE_PROPOSAL_SERV_ID_SERVICE, useClass: ExampleProposalServIdServiceImpl},
    {provide: EXAMPLE_PROPOSAL_SERVICE, useClass: ExampleProposalServiceImplementation},
    {provide: REMOTE_RESOURCES_FACTORY, useClass: RemoteResourceFactoryImplementation}
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
