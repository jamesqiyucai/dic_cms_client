import {ExampleSourceNewspaperFactory} from './example-source-newspaper-factory.interface';
import {ExampleSourceNewspaper} from './example-source-newspaper.class';

export class ExampleSourceNewspaperFactoryImpl implements ExampleSourceNewspaperFactory {
  createNewSource(): ExampleSourceNewspaper {
    return new ExampleSourceNewspaper('', null, null, null, 1, '', '');
  }
}
