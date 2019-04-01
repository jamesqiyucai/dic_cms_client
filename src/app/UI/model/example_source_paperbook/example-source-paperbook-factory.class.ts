import {ExampleSourcePaperbookFactory} from './example-source-paperbook-factory.interface';
import {ExampleSourcePaperbook} from './example-source-paperbook.class';

export class ExampleSourcePaperbookFactoryImpl implements ExampleSourcePaperbookFactory {
  createNewSource(): ExampleSourcePaperbook {
    return new ExampleSourcePaperbook('', '', null, null, null, '');
  }
}
