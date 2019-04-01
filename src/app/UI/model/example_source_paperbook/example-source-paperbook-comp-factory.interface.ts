import {ExampleSourcePaperbookComp} from './example-source-paperbook-comp.class';

export interface ExampleSourcePaperbookFactory {
  createNewSource(): ExampleSourcePaperbookComp;
}

