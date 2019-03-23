import {SenseComp} from '../sense/sense-comp.class';
import {ListedItemComp} from './listed-item-comp.interface';

export class ListedItemCompImpl implements ListedItemComp {
  public sense: SenseComp;
  constructor(sense?: SenseComp) {
    this.sense = sense;
  }
}
