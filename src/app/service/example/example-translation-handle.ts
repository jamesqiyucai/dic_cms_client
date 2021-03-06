import {Observable} from 'rxjs';

export interface ExampleTranslationHandle {
  id: number;
  text: string;
  $text: Observable<string>;
}
