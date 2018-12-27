import {Broadcaster} from './broadcaster.interface';

export class BroadcasterImpl<T> implements Broadcaster<T> {
  private handlers: Array<(event: T) => any> = [];
  public subscribe(functor: (event: T) => any) {
    this.handlers.push(functor);
  }
  public broadcast(data: T) {
    this.handlers.forEach(fn => fn(data));
  }
}
