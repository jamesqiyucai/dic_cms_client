import {WordBuilderNewSensePositionFactory} from '../interfaces/word-builder-new-sense-position-factory.interface';
import {WordBuilderSensePosition} from '../../word-builder-sense-position.class';

export class WordBuilderSensePositionFactoryImpl implements WordBuilderNewSensePositionFactory {
  public createNewSensePosition(): WordBuilderSensePosition {
    return new WordBuilderSensePosition(null, null);
  }
}
