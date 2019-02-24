import {ComponentSense} from '../models/component-sense.class';

export interface NewComponentSenseFactory {
  createNewSense(): ComponentSense;
}
