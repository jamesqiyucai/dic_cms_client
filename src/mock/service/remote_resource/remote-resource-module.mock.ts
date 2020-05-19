import {NgModule} from '@angular/core';
import {REMOTE_RESOURCE_FACTORY, SESSION_SERVICE} from '../../../app/service/remote_resource';
import {SessionServiceMock} from './session-service.mock';
import {SESSION_ESTABLISHER} from '../../../app/service/remote_resource/session-establisher';
import {RemoteResourceFactoryMock} from './remote-resource-factory.mock';

@NgModule({
  providers: [
    {provide: REMOTE_RESOURCE_FACTORY, useClass: RemoteResourceFactoryMock},
    {provide: SESSION_SERVICE, useClass: SessionServiceMock},
    {provide: SESSION_ESTABLISHER, useClass: SessionServiceMock}
  ]
})
export class RemoteResourceModuleMock {}
