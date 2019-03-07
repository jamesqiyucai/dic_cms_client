import {ListedItemComp} from './listed-item-comp.interface';
import {SenseComp} from '../sense/sense-comp.class';

export abstract class AbstractListedItemComp implements ListedItemComp {
  protected constructor(readonly isSense: boolean, private sense?: SenseComp) {}

  public getContent(): SenseComp | null {
    if (this.isSense) {
      return this.sense;
    } else {
      return null;
    }
  }
}
