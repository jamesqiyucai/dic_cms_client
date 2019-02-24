import {ComponentExample} from '../models/component-example.class';

export interface NewComponentExampleFactory {
  createNewExample(): ComponentExample;
}
