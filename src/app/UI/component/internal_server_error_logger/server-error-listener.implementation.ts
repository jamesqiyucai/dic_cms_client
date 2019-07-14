import {ServerErrorListener} from '../../../data_access/server-error-listener';
import {InternalServerErrorLoggerComponentInterface} from './internal-server-error-logger.component.interface';

export class ServerErrorListenerImplementation implements ServerErrorListener {
  constructor(private internalServerErrorLoggerComponent: InternalServerErrorLoggerComponentInterface) {}
  notifyInternalServerError(): void {
    this.internalServerErrorLoggerComponent.logError();
  }
}
