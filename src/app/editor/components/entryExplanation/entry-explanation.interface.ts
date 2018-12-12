import {Sense} from '../../shared/entry/sense/sense.interface';
import {List} from 'immutable';

export interface EntryExplanation {
  firstLevelSenses: List<Sense>;
  secondLevelSenses: Map<number, List<Sense>>;
}
