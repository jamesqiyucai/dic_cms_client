import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { ServerErrorListener } from '../server-error-listener';
import { catchError } from 'rxjs/operators';
import {ExceptionTranslator} from '../exception-translator';
import {RemoteResource} from './remote-resource';

export class RemoteResourceImplementation implements RemoteResource {

  constructor(
    private url: string,
    private et: ExceptionTranslator,
    private errorListeners: ServerErrorListener[],
    private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    const statusCode = error.status.toString();
    if (statusCode.startsWith('5')) {
      this.errorListeners.forEach(listener => {
        listener.notifyInternalServerError();
      });
      return throwError('Error Occurred');
    }
    if (statusCode.startsWith('4')) {
      return throwError(this.et.translate(error.error));
    }
  }


  public get<T>(id: number): Observable<T> {
    // return this.http.get(`/api/${this.domain}/${id}`) as Observable<T>;
    return <Observable<T>>this.http.get(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  public post<T, R>(entity: T): Observable<R> {
    return <Observable<R>>this.http.post(`${this.url}`, entity)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }
}
