// import {ListedItemCompFactory} from './listed-item-comp-factory.interface';
// import {ListedItemComp} from './listed-item-comp.interface';
// import {Inject, Injectable} from '@angular/core';
// import {SENSE_FACTORY} from '../sense/injection-token';
// import {SenseCompFactory} from '../sense/sense-comp-factory.interface';
// import {ListedItemCompImpl} from './listed-item-comp.class';
//
// @Injectable()
// export class ListedItemCompFactoryImpl implements ListedItemCompFactory {
//   constructor(@Inject(SENSE_FACTORY) private senseFactory: SenseCompFactory) {}
//   public createNewListedItem(isSense: boolean): ListedItemComp {
//     if (isSense) {
//       return new ListedItemCompImpl(this.senseFactory.createNewSense());
//     } else {
//       return new ListedItemCompImpl();
//     }
//   }
// }
