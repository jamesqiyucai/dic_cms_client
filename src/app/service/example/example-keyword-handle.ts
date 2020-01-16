import {Observable} from 'rxjs';

export interface ExampleKeywordHandle {
  keyword: string;
  $keyword: Observable<string>;
}
