import {ListedItemComp} from './listed-item-comp.interface';
import {SenseComp} from '../sense/sense-comp.class';
import * as _ from 'lodash';

export abstract class AbstractListedItemComp implements ListedItemComp {
  protected constructor(private sense: SenseComp) {}

  public getSense(): SenseComp | null {
    if (this.sense) {
      return _.cloneDeep(this.sense);
    } else {
      return null;
    }
  }
}
