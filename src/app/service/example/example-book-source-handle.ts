import {ExampleSourceHandle} from './example-source-handle';
import {Observable} from 'rxjs';

export interface ExampleBookSourceHandle extends ExampleSourceHandle {
  page: number;
  $page: Observable<number>;
  initialPublishingYear: number;
  $initialPublishingYear: Observable<number>;
  publishedYear: number;
  $publishedYear: Observable<number>;
  publishedPlace: string;
  $publishedPlace: Observable<string>;
}
