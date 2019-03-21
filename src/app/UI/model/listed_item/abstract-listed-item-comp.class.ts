import {ListedItemComp} from './listed-item-comp.interface';
import {SenseComp} from '../sense/sense-comp.class';
import {fromJSGreedy} from '../../../../utils/changeElementOrder.function';

export abstract class AbstractListedItemComp implements ListedItemComp {
  protected constructor(private sense: SenseComp) {}

  public getSense(): SenseComp | null {
    if (this.sense) {
      return fromJSGreedy(this.sense);
    } else {
      return null;
    }
  }
}
