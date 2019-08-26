import {Injectable} from '@angular/core';
import {RemoteResourcesFactory} from './remote-resources-factory';
import {ServerErrorListener} from '../server-error-listener';
import {ExceptionTranslator} from '../exception-translator';
import {RemoteResource} from './remote-resource';
import {RemoteResourceImplementation} from './remote-resource.implementation';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RemoteResourceFactoryImplementation implements RemoteResourcesFactory {
  constructor(private http: HttpClient) {}
  private listeners: ServerErrorListener[] = [];

  public register(listener: ServerErrorListener): void {
    this.listeners.push(listener);
  }

  public bind(url: string, et: ExceptionTranslator): RemoteResource {
    return new RemoteResourceImplementation(url, et, this.listeners, this.http);
  }

}
