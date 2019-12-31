import {RemoteResourceFactory} from './remote-resource-factory';
import {Injectable} from '@angular/core';
import {ExceptionNotifier} from './exception-notifier';
import {Resource} from './resource';
import {ExceptionTranslator} from './exception-translator';
import {ResourceImpl} from './resource-impl';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RemoteResourceFactoryImpl implements RemoteResourceFactory {
  constructor(private http: HttpClient) {}
  private _notifiers: ExceptionNotifier[] = [];
  public register(notifier: ExceptionNotifier): void {
    this._notifiers.push(notifier);
  }
  public bind(url: string, et: ExceptionTranslator): Resource {
    return new ResourceImpl(this.http, url, et, this._notifiers);
  }
}

