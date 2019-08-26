import {Observable} from 'rxjs';

export interface RemoteResource {
  get<T>(id: number): Observable<T>;
  post<E, T>(entity: E): Observable<T>;
}
