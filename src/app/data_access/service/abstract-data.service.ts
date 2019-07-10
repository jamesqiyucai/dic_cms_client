import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { ServerErrorListener } from '../server-error-listener';
import { catchError } from 'rxjs/operators';

export abstract class AbstractDataService<T> {
  protected abstract domain: string;

  protected errorListeners: ServerErrorListener[] = [];

  protected constructor(protected http: HttpClient) {}

  protected handleError(error: HttpErrorResponse) {
    const statusCode = error.status.toString();
    if (statusCode.startsWith('5')) {
      this.errorListeners.forEach(listener => {
        listener.notifyInternalServerError();
      });
    }
    return throwError('Error Occured');
  }

  public get(id: number): Observable<T> {
    // return this.http.get(`/api/${this.domain}/${id}`) as Observable<T>;
    return <Observable<T>>this.http.get(`/api/${this.domain}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public post<R>(entity: T): Observable<R> {
    return <Observable<R>>this.http.post(`/api/${this.domain}`, entity)
      .pipe(
        catchError(this.handleError)
      );
  }

  public countErrorListeners(): number {
    return this.errorListeners.length - 1;
  }

  public injectErrorListener(listener: ServerErrorListener) {
    this.errorListeners.push(listener);
  }
}
