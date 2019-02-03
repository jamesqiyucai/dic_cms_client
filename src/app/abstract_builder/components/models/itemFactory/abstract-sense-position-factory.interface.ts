import {AbstractSensePosition} from '../abstract-sense-position.class';

export interface AbstractSensePositionFactory {
  getSensePosition(group: number, order: number): AbstractSensePosition;
}
