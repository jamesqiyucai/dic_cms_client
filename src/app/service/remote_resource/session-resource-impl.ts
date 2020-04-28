import {ResourceImpl} from './resource-impl';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ExceptionTranslator} from './exception-translator';
import {ExceptionNotifier} from './exception-notifier';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, first, mergeMap} from 'rxjs/operators';
import {ExpiredSessionError} from './expired-session-error';
import {SessionService} from './session-service';
import {SessionRetryFailureError} from './session-retry-failure-error';

export class SessionResourceImpl extends ResourceImpl {
  private session: Observable<string>;
  private sessionService: SessionService;
  constructor(
    sessionService: SessionService,
    httpClient: HttpClient,
    url: string,
    et: ExceptionTranslator,
    notifiers: ExceptionNotifier[],
    session: Observable<string>
  ) {
    super(httpClient, url, et, notifiers);
    this.session = session;
    this.sessionService = sessionService;
  }
  protected handleError(error: HttpErrorResponse): Observable<never> {
    const statusCode = error.status.toString();
    // todo: decide the error code for expired session
    if (statusCode === '000') {
      return throwError(new ExpiredSessionError());
    } else {
      return super.handleError(error);
    }
  }

  public get<Content>(urlSupplement: string, options: {[key: string]: any}): Observable<Content> {
    let count = 5;
    const doGet = (): Observable<Content> => {
      const finalUrl = urlSupplement ? this._url + urlSupplement : this._url;
      return this.session
        .pipe(
          filter((val) => {
            return typeof val !== 'undefined';
          }),
          first(),
          mergeMap(session => {
            options.headers = {
              headers: new HttpHeaders({
                'X-Protovrsdict-Session': session
              })
            };
            return this._httpClient.get<Content>(finalUrl, options);
          }),
          catchError(this.handleError),
          catchError((err) => {
            if (count > 0 && (err instanceof ExpiredSessionError)) {
              return this.sessionService.establishSession()
                .pipe(
                  mergeMap(() => {
                    -- count;
                    return doGet();
                  })
                );
            } else {
              return throwError(new SessionRetryFailureError());
            }
          })
        );
    };
    return doGet();
  }
  public post<Request, Response>(body: Request, urlSupplement: string) {
    let count = 5;
    const doPost = (): Observable<any> => {
      const finalUrl = urlSupplement ? this._url + urlSupplement : this._url;
      let httpOptions;
      return this.session
        .pipe(
          filter((val) => {
            return typeof val !== 'undefined';
          }),
          first(),
          mergeMap(session => {
            httpOptions = {
              headers: new HttpHeaders({
                'X-Protovrsdict-Session': session
              })
            };
            return this._httpClient.post<Response>(finalUrl, body, httpOptions);
          }),
          catchError(this.handleError),
          catchError((err) => {
            if (count > 0 && (err instanceof ExpiredSessionError)) {
              return this.sessionService.establishSession()
                .pipe(
                  mergeMap(() => {
                    -- count;
                    return doPost();
                  })
                );
            } else {
              return throwError(new SessionRetryFailureError());
            }
          })
        );
    };
    return doPost();
  }
}
