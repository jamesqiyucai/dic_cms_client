import {ExampleSourcePaperbookFactory} from './example-source-paperbook-comp-factory.interface';
import {ExampleSourcePaperbookComp} from './example-source-paperbook-comp.class';

export class ExampleSourcePaperbookFactoryImpl implements ExampleSourcePaperbookFactory {
  createNewSource(): ExampleSourcePaperbookComp {
    return new ExampleSourcePaperbookComp('', '', null, null, null, '');
  }
}
