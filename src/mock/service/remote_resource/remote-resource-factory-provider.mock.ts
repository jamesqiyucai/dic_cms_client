import {REMOTE_RESOURCE_FACTORY} from '../../../app/service/remote_resource';
import {RemoteResourceFactoryMock} from './remote-resource-factory.mock';

export const RemoteResourceFactoryProviderMock = {
  provide: REMOTE_RESOURCE_FACTORY,
  useClass: RemoteResourceFactoryMock
};

