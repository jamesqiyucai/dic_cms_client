import {Observable} from 'rxjs';

export interface TranslationOrigin {
  text: string;
  text$: Observable<string>;
}
