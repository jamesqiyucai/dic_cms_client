import {NgModule} from '@angular/core';
import {REMOTE_RESOURCE_FACTORY} from './remote-resource-factory';
import {RemoteResourceFactoryImpl} from './remote-resource-factory-impl';

@NgModule({
  providers: [{provide: REMOTE_RESOURCE_FACTORY, useClass: RemoteResourceFactoryImpl}]
})
export class RemoteResourceModule {}
