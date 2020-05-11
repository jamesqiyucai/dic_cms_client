import {Observable} from 'rxjs';

export interface SessionEstablisher {
  establishSession(): Observable<string>;
}
