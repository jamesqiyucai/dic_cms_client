import {AbstractListedItemComp} from './abstract-listed-item-comp.class';
import {ListedItemComp} from './listed-item-comp.interface';

export class ListedItemSeparatorComp extends AbstractListedItemComp implements ListedItemComp {
  constructor() {
    super(null);
  }
}
