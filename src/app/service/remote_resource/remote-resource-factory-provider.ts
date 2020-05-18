import {REMOTE_RESOURCE_FACTORY} from './remote-resource-factory';
import {RemoteResourceFactoryImpl} from './remote-resource-factory-impl';

export const RemoteResourceFactoryProvider = {
  provide: REMOTE_RESOURCE_FACTORY,
  useClass: RemoteResourceFactoryImpl
};
