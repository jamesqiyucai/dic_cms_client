import {Resource} from './resource';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ExceptionTranslator} from './exception-translator';
import {ExceptionNotifier} from './exception-notifier';
import {catchError} from 'rxjs/operators';

export class ResourceImpl implements Resource {
  constructor(
    private _httpClient: HttpClient,
    private _url: string,
    private _et: ExceptionTranslator,
    private _notifiers: ExceptionNotifier[]
  ) {}
  private handleError(error: HttpErrorResponse) {
    const statusCode = error.status.toString();
    if (statusCode.startsWith('5')) {
      this._notifiers.forEach(notifier => {
        notifier.notifyCriticalMistake();
      });
      return throwError('Error Occurred');
    }
    if (statusCode.startsWith('4')) {
      return throwError(this._et.getAppError(error.status, error.error));
    }
  }
  public setID(ID: number): void {
    this._url = this._url + ID.toString();
  }

  public get<Content>(options?: object): Observable<Content> {
    return this._httpClient.get<Content>(this._url, options ? options : {})
      .pipe(
        catchError(this.handleError)
      );
  }
  public post<Request, Response>(body: Request, urlModification?: string): Observable<Response> {
    let finalUrl: string;
    if (urlModification) {
      finalUrl = `${this._url}/${urlModification}`;
    }
    return this._httpClient.post<Response>(finalUrl, body)
      .pipe(
        catchError(this.handleError)
      );
  }
}
