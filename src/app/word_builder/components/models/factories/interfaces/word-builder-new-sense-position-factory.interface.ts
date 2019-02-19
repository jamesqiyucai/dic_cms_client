import {WordBuilderSensePosition} from '../../word-builder-sense-position.class';

export interface WordBuilderNewSensePositionFactory {
  createNewSensePosition(): WordBuilderSensePosition;
}
