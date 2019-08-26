import {ServerErrorListener} from '../../../data_access/server-error-listener';

export class ServerErrorListenerImplementation implements ServerErrorListener {
  constructor(private handler: () => void) {}
  public notifyInternalServerError(): void {
    this.handler();
  }
}
