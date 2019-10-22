import {TranslationService} from './translation-service';
import {List} from 'immutable';
import {SourceService} from './source-service';

export interface ExampleService {
  ID: number;
  version: number;
  text: string;
  keywords: List<string>;
  italics: List<[number, number]>;
  translations: List<TranslationService>;
  note: string;
  comment: string;
  source: SourceService;
}

