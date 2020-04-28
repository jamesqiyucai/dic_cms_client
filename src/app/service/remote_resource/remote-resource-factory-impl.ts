import {RemoteResourceFactory} from './remote-resource-factory';
import {Inject, Injectable} from '@angular/core';
import {ExceptionNotifier} from './exception-notifier';
import {Resource} from './resource';
import {ExceptionTranslator} from './exception-translator';
import {ResourceImpl} from './resource-impl';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {SessionOption} from './session-option';
import {SessionResourceImpl} from './session-resource-impl';
import {SESSION_SERVICE, SessionService} from './session-service';

@Injectable()
export class RemoteResourceFactoryImpl implements RemoteResourceFactory {
  private _notifiers: ExceptionNotifier[] = [];
  private _session: BehaviorSubject<string>;
  constructor(
    @Inject(SESSION_SERVICE) private sessionService: SessionService,
    private http: HttpClient) {
    this._session = new BehaviorSubject<string>(undefined);
  }
  public register(notifier: ExceptionNotifier): void {
    this._notifiers.push(notifier);
  }
  public bind(url: string, et: ExceptionTranslator, sessionOption: SessionOption): Resource {
    if (sessionOption === SessionOption.none) {
      return new ResourceImpl(this.http, url, et, this._notifiers);
    } else if (sessionOption === SessionOption.necessary) {
      return new SessionResourceImpl(this.sessionService, this.http, url, et, this._notifiers, this._session.asObservable());
    }
  }
  public setSession(session: string): void {
    this._session.next(session);
  }
  public passSessionError(error: any): void {
    this._session.error(error);
  }
  public clearSession(): void {
    this._session.next(undefined);
  }
}

