import {ExampleSourceHandle} from './example-source-handle';
import {Observable} from 'rxjs';

export interface ExampleJournalSourceHandle extends ExampleSourceHandle {
  page: number;
  $page: Observable<number>;
  passageTitle: string;
  $passageTitle: Observable<string>;
  publishingDate: string;
  $publishingDate: Observable<string>;
}
