import {InjectionToken} from '@angular/core';
import {ListedItemCompFactory} from './listed-item-comp-factory.interface';

export const LISTED_ITEM_FACTORY = new InjectionToken<ListedItemCompFactory>('ListedItemCompFactory');
