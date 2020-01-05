import {ExampleSourceComponentTypes} from '../example-source.component.types';

export interface ExampleSourceJournalComponentDto {
  type: ExampleSourceComponentTypes;
  author: string;
  title: string;
  page: number;
  passageTitle: string;
  publishingDate: string;
}
