import {RemoteResourceFactory} from './remote-resource-factory';
import {Injectable} from '@angular/core';
import {ExceptionNotifier} from './exception-notifier';
import {Resource} from './resource';
import {ExceptionTranslator} from './exception-translator';
import {ResourceImpl} from './resource-impl';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {SessionOption} from './session-option';
import {SessionResourceImpl} from './session-resource-impl';
import {SessionEstablisher} from './session-establisher';

@Injectable()
export class RemoteResourceFactoryImpl implements RemoteResourceFactory {
  private _sessionEstablisher?: SessionEstablisher;
  private _notifiers: ExceptionNotifier[] = [];
  private _session: BehaviorSubject<string | undefined>;
  constructor(
    private http: HttpClient) {
    this._session = new BehaviorSubject(undefined);
  }
  public set sessionEstablisher(establisher: SessionEstablisher) {
    this._sessionEstablisher = establisher;
  }
  public register(notifier: ExceptionNotifier): void {
    this._notifiers.push(notifier);
  }
  public bind(url: string, et: ExceptionTranslator, sessionOption: SessionOption): Resource {
    if (sessionOption === SessionOption.none) {
      return new ResourceImpl(this.http, url, et, this._notifiers);
    } else if (sessionOption === SessionOption.necessary) {
      if (this._sessionEstablisher) {
        return new SessionResourceImpl(this._sessionEstablisher, this.http, url, et, this._notifiers, this._session.asObservable());
      } else {
        throw new Error('establish session function is undefined');
      }
    } else {
      throw new Error('unmatched resource');
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

