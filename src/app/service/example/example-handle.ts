import {ExampleTranslationHandle} from './example-translation-handle';
import {List} from 'immutable';
import {ExampleSourceHandle} from './example-source-handle';
import {Observable} from 'rxjs';

export interface ExampleHandle {
  ID: number;
  $ID: Observable<number>;
  text: string;
  $text: Observable<string>;
  keywords: List<string>;
  $keywords: Observable<List<string>>;
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

