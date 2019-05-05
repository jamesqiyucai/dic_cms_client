import {ExampleSourceServiceModelTypes} from '../../model/example_source/example-source.service.model.types';

export interface ExampleData {
  id: null;
  initiator: null;
  status: null;
  exampleId: number;
  version: number;
  text: string;
  format: {
    italic: Array<[number, number]>
  };
  translations: Array<string>;
  keywords: Array<string>;
  note: string | null;
  comment: string | null;
  source: {
    type: ExampleSourceServiceModelTypes,
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
