type handler = (event: any) => any;

export interface Broadcaster {
  subscribe(fn: (event: any) => any): void;
  broadcast(data: any): void;
}
