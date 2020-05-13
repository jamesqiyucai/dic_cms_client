import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface SessionEstablisher {
  establishSession(): Observable<string>;
}

export const SESSION_ESTABLISHER = new InjectionToken<SessionEstablisher>('SessionEstablisher');
