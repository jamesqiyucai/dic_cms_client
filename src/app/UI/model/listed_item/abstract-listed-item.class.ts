import {ListedItem} from './listed-item.interface';
import {SenseComp} from '../sense/sense-comp.class';

export abstract class AbstractListedItem implements ListedItem {
  protected constructor(readonly isSense: boolean, private sense?: SenseComp) {}

  public getContent(): SenseComp | null {
    if (this.isSense) {
      return this.sense;
    } else {
      return null;
    }
  }
}
