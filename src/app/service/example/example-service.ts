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
  addKeyword(atIndex: number, word: string);
  removeKeyword(atIndex: number);
  moveKeyword(fromIndex: number, toIndex: number);
  addItalic(atIndex: number, italic: [number, number]);
  removeItalic(atIndex: number);
  moveItalic(fromIndex: number, toIndex: number);
  addTranslation(atIndex: number, translation: TranslationService);
  removeTranslation(atIndex: number);
  moveTranslation(fromIndex: number, toIndex: number);
  setSource(newSource: SourceService);
}

