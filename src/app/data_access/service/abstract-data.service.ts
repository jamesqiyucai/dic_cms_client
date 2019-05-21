import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class AbstractDataService<T> {
  protected abstract domain: string;

  protected constructor(protected http: HttpClient) {}

  public get(id: number): Observable<T> {
    return this.http.get(`/api/${this.domain}/${id}`) as Observable<T>;
  }

  public post<R>(entity: T): Observable<R> {
    return this.http.post(`/api/${this.domain}`, entity) as Observable<R>;
  }
}
