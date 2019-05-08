import {List} from 'immutable';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';

export interface ExampleEditorComponentDto {
  id: number;
  version: number;
  text: string;
  format: { italics: List<[number, number]> };
  translations: List<string>;
  keywords: List<string>;
  comment: string;
  note: string;
  source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;
}

