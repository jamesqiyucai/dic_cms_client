import {Resource} from './resource';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ExceptionTranslator} from './exception-translator';
import {ExceptionNotifier} from './exception-notifier';
import {catchError} from 'rxjs/operators';

export class ResourceImpl implements Resource {
  constructor(
    protected _httpClient: HttpClient,
    protected _url: string,
    protected _et: ExceptionTranslator,
    protected _notifiers: ExceptionNotifier[],
  ) {}
  protected handleError (error: HttpErrorResponse): Observable<never> {
    const statusCode = error.status.toString();
    if (statusCode.startsWith('5')) {
      this._notifiers.forEach(notifier => {
        notifier.notifyCriticalMistake();
      });
      return throwError('Error Occurred');
    } else {
      return throwError(this._et.getAppError(error.status, error.error));
    }
  }
  public setID(ID: number): void {
    this._url = this._url + ID.toString();
  }

  public get<Content>(urlSupplement: string, options: object): Observable<Content> {
    const finalUrl = urlSupplement ? this._url + urlSupplement : this._url;
    return this._httpClient.get<Content>(finalUrl, options)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  public post<Request, Response>(body: Request, urlSupplement?: string): Observable<Response> {
    const finalUrl = urlSupplement ? this._url + urlSupplement : this._url;
    return this._httpClient.post<Response>(finalUrl, body)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
}
