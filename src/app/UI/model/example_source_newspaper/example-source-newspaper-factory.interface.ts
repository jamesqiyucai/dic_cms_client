import {ExampleSourceNewspaper} from './example-source-newspaper.class';

export interface ExampleSourceNewspaperFactory {
  createNewSource(): ExampleSourceNewspaper;
}
