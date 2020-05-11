import {ExceptionNotifier} from './exception-notifier';
import {ExceptionTranslator} from './exception-translator';
import {Resource} from './resource';
import {InjectionToken} from '@angular/core';
import {SessionOption} from './session-option';
import {SessionEstablisher} from './session-establisher';

export interface RemoteResourceFactory {
  sessionEstablisher: SessionEstablisher;
  register(notifier: ExceptionNotifier): void;
  bind(url: string, et: ExceptionTranslator, sessionOption: SessionOption): Resource;
  setSession(session: string): void;
  passSessionError(error: any): void;
  clearSession(): void;
}

export const REMOTE_RESOURCE_FACTORY = new InjectionToken<RemoteResourceFactory>('remote resource factory');
