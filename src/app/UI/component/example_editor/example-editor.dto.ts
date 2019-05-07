import {List} from 'immutable';

export interface ExampleEditorDto {
  id: number;
  version: number;
  text: string;
  format: { italics: List<[number, number]> };
  translations: List<string>;
  keywords: List<string>;
  comment: string;
  note: string;
  source: {
    type: string,
    author: string,
    title: string,
    page: number,
    initialPublishingYear?: number,
    publishedYear?: number,
    publishedPlace?: string,
    passageTitle?: string,
    publishingDate?: string,
  };
}

