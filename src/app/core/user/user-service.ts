import {InjectionToken} from '@angular/core';

export interface UserService {
  setUser(id: number): void;
  getUser(id: number): string;
  getCurrentUser(): number;
}

export const USER_SERVICE = new InjectionToken<UserService>('UserService');
