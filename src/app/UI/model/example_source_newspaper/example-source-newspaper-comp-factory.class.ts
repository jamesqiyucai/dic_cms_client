import {ExampleSourceNewspaperFactory} from './example-source-newspaper-comp-factory.interface';
import {ExampleSourceNewspaperComp} from './example-source-newspaper-comp.class';

export class ExampleSourceNewspaperFactoryImpl implements ExampleSourceNewspaperFactory {
  createNewSource(): ExampleSourceNewspaperComp {
    return new ExampleSourceNewspaperComp('', null, null, null, 1, '', '');
  }
}
