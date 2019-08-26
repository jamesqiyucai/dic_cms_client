import {ServerErrorListener} from '../server-error-listener';
import {ExceptionTranslator} from '../exception-translator';
import {RemoteResource} from './remote-resource';

export interface RemoteResourcesFactory {
  register(listener: ServerErrorListener): void;
  bind(url: string, et: ExceptionTranslator): RemoteResource;
}
