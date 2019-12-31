import {Observable} from 'rxjs';

export interface ExampleSourceHandle {
  author: string;
  $author: Observable<string>;
  title: string;
  $title: Observable<string>;
  getType(): string;
}
