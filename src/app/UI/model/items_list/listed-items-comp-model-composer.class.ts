import {ListedItemsCompModelComposer} from './listed-items-comp-model-composer.interface';
import {ListedItemsCompModel} from './listed-items-comp-model.interface';
import {List} from 'immutable';
import {Inject, Injectable} from '@angular/core';
import {ListedItemsCompModelImpl} from './listed-items-comp-model.class';
import {ListedItemComp} from '../listed_item/listed-item-comp.interface';
import {ListedItemCompFactory} from '../listed_item/listed-item-comp-factory.interface';
import {LISTED_ITEM_FACTORY} from '../listed_item/injection-token';

@Injectable()
export class ListedItemsCompModelComposerImpl implements ListedItemsCompModelComposer {
  private data: List<ListedItemComp> = List([this.listedItemFactory.createNewListedItem()]);

  constructor(
    @Inject(LISTED_ITEM_FACTORY) private listedItemFactory: ListedItemCompFactory
  ) {}

  public createNewModel(): ListedItemsCompModel {
    return new ListedItemsCompModelImpl(this.data);
  }
}
