import {
  AbstractSensePositionFactory
} from '../../../../../abstract_builder/components/models/itemFactory/abstract-sense-position-factory.interface';
import {WordBuilderSensePosition} from '../../word-builder-sense-position.class';

export interface WordBuilderSensePositionFactory extends AbstractSensePositionFactory {
  getSensePosition(group: number, order: number): WordBuilderSensePosition;
}
