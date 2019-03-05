import {NewComponentSensePositionFactory} from './new-sense-position-factory.interface';
import {ComponentSensePosition} from './component-sense-position.class';

export class WordBuilderNewSensePositionFactoryImpl implements NewComponentSensePositionFactory {
  public createNewSensePosition(): ComponentSensePosition {
    return new ComponentSensePosition(null, null);
  }
}
