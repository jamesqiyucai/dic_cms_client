import {AbstractListedItemComp} from './abstract-listed-item-comp.class';
import {SenseComp} from '../sense/sense-comp.class';

export class ListedItemSenseComp extends AbstractListedItemComp implements ListedItemSenseComp {
  constructor(sense: SenseComp) {
    super(true, sense);
  }
}
