import {Observable} from 'rxjs';

export interface Resource {
  setID(ID: number): void;
  get<Content>(options?: object): Observable<Content>;
  post<Response>(body: any, urlModification?: string): Observable<Response>;
}
