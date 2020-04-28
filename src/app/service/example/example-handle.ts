import {ExampleTranslationHandle} from './example-translation-handle';
import {List} from 'immutable';
import {ExampleSourceHandle} from './example-source-handle';
import {Observable} from 'rxjs';
import {ExampleKeywordHandle} from './example-keyword-handle';

export interface ExampleHandle {
  ID: number;
  $ID: Observable<number>;
  text: string;
  $text: Observable<string>;
  keywords: List<ExampleKeywordHandle>;
  keywordsObservable: Observable<List<ExampleKeywordHandle>>;
  italics: List<[number, number]>;
  $italics: Observable<List<[number, number]>>;
  translations: List<ExampleTranslationHandle>;
  $translations: Observable<List<ExampleTranslationHandle>>;
  note: string;
  $note: Observable<string>;
  comment: string;
  $comment: Observable<string>;
  source: ExampleSourceHandle;
  $source: Observable<ExampleSourceHandle>;
}

