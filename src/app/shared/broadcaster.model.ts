export class Broadcaster<T> {
  private handlers: Array<(T) => any> = [];
  constructor(readonly name: string) {}
  public subscribe(functor: (T) => any): void {
    this.handlers.push(functor);
  }
  public broadcast(data: T) {
    this.handlers.forEach(fn => fn(data));
  }
}
