export interface Broadcaster<T> {
  subscribe(fn: (event: T) => any): void;
  broadcast(data: T): void;
}
