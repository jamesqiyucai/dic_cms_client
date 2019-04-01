import {ExampleSourcePaperbook} from './example-source-paperbook.class';

export interface ExampleSourcePaperbookFactory {
  createNewSource(): ExampleSourcePaperbook;
}

