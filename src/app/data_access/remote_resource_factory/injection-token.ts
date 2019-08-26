import {InjectionToken} from '@angular/core';
import {RemoteResourcesFactory} from './remote-resources-factory';

export const REMOTE_RESOURCES_FACTORY = new InjectionToken<RemoteResourcesFactory>('RemoteResourcesFactoryService');
