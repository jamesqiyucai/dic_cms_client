import {ExceptionNotifier} from './exception-notifier';
import {ExceptionTranslator} from './exception-translator';
import {Resource} from './resource';
import {InjectionToken} from '@angular/core';

export interface RemoteResourceFactory {
  register(notifier: ExceptionNotifier): void;
  bind(url: string, et: ExceptionTranslator): Resource;
}

export const REMOTE_RESOURCE_FACTORY = new InjectionToken<RemoteResourceFactory>('remote resource factory');
