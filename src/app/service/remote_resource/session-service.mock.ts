import {SessionEstablisher} from './session-establisher';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {REMOTE_RESOURCE_FACTORY, RemoteResourceFactory} from './remote-resource-factory';
import {SessionService} from './session-service';

@Injectable()
export class SessionServiceImpl implements SessionService, SessionEstablisher {
  constructor(@Inject(REMOTE_RESOURCE_FACTORY) private rrf: RemoteResourceFactory) {
    this.rrf.sessionEstablisher = this;
  }
  public establishSession(): Observable<string> {
    this.rrf.clearSession();
    this.rrf.setSession('1');
    return new Observable<string>(subscriber => {
      subscriber.next('1');
      subscriber.complete();
    });
  }
}
