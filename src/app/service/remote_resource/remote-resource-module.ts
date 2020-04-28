import {NgModule} from '@angular/core';
import {REMOTE_RESOURCE_FACTORY} from './remote-resource-factory';
import {RemoteResourceFactoryImpl} from './remote-resource-factory-impl';
import {SESSION_SERVICE} from './session-service';
import {SessionServiceImpl} from './session-service-impl';

@NgModule({
  providers: [
    {provide: REMOTE_RESOURCE_FACTORY, useClass: RemoteResourceFactoryImpl},
    {provide: SESSION_SERVICE, useClass: SessionServiceImpl}
  ]
})
export class RemoteResourceModule {}
