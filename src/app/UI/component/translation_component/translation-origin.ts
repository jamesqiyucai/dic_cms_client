import {Observable} from 'rxjs';

export interface TranslationOrigin {
  ID: number;
  $ID: Observable<number>;
  text: string;
  $text: Observable<string>;
}
