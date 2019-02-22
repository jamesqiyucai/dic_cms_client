import {ComponentSense} from '../../component-sense.class';

export interface NewComponentSenseFactory {
  createNewSense(): ComponentSense;
}
