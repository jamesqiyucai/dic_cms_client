import {ComponentSensePosition} from '../models/component-sense-position.class';

export interface NewComponentSensePositionFactory {
  createNewSensePosition(): ComponentSensePosition;
}
