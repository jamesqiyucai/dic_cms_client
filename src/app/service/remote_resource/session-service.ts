import {InjectionToken} from '@angular/core';

export interface SessionService {
}

export const SESSION_SERVICE = new InjectionToken<SessionService>('SessionService');
