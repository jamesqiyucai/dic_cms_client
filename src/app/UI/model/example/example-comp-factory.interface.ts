import {ExampleComp} from './example-comp.class';

export interface ExampleCompFactory {
  createNewExample(): ExampleComp;
}
