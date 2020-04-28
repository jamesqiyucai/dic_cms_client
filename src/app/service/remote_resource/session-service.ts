import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface SessionService {
  establishSession(): Observable<string>;
}

export const SESSION_SERVICE = new InjectionToken<SessionService>('SessionService');
