import {AppEvent} from './app-event.interface';

export class AppEventImpl<T> implements AppEvent<T> {
  payload: T;
  constructor(payload: T) {
    this.payload = payload;
  }
}
