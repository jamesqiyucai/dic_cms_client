import {Observable} from 'rxjs';

export interface Resource {
  setID(ID: number): void;
  get<Content>(urlSupplement: string, options: object): Observable<Content>;
  post<Request, Response>(body: any, urlModification?: string): Observable<Response>;
}
