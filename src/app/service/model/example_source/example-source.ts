import {ExampleSourceServiceModelTypes} from './example-source.service.model.types';

export interface ExampleSource {
  type: ExampleSourceServiceModelTypes;
  author?: string;
  title?: string;
  page?: number;
  initialPublishingYear?: number;
  publishedYear?: number;
  publishedPlace?: string;
  passageTitle?: string;
  publishingDate?: string;
}
