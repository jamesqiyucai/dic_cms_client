import {ExampleSourceComponentTypes} from '../example-source.component.types';

export interface ExampleSourceBookComponentDto {
  type: ExampleSourceComponentTypes;
  author: string;
  title: string;
  page: number;
  initialPublishingYear: number;
  publishedYear: number;
  publishedPlace: string;
}
