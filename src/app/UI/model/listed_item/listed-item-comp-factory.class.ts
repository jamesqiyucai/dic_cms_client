import {ListedItemCompFactory} from './listed-item-comp-factory.interface';
import {ListedItemComp} from './listed-item-comp.interface';
import {ListedItemSenseComp} from './listed-item-sense-comp.class';
import {Inject, Injectable} from '@angular/core';
import {SENSE_FACTORY} from '../sense/injection-token';
import {SenseCompFactory} from '../sense/sense-comp-factory.interface';
import {ListedItemSeparatorComp} from './listed-item-separator-comp.class';

@Injectable()
export class ListedItemCompFactoryImpl implements ListedItemCompFactory {
  constructor(@Inject(SENSE_FACTORY) private senseFactory: SenseCompFactory) {}
  public createNewListedItem(isSense: boolean): ListedItemComp {
    if (isSense) {
      return new ListedItemSenseComp(this.senseFactory.createNewSense());
    } else {
      return new ListedItemSeparatorComp();
    }
  }
}
