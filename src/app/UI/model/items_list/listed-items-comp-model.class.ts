import {ListedItemsCompModel} from './listed-items-comp-model.interface';
import {List} from 'immutable';
import {SenseComp} from '../sense/sense-comp.class';
import {StoryComp} from '../story/story-comp.class';
import {ExampleComp} from '../example/example-comp.class';
import {ListedItemComp} from '../listed_item/listed-item-comp.interface';

export class ListedItemsCompModelImpl implements ListedItemsCompModel {
  constructor(private _items: List<ListedItemComp>) {}

  get items() {
    return this._items;
  }

  addSeparator(atIndex: number, separator: ListedItemComp): void {
    this._items = this._items.insert(atIndex, separator);
  }

  deleteSeparator(atIndex: number): void {
    this._items = this._items.delete(atIndex);
  }

  addSense(atIndex: number, newSense: ListedItemComp): void {
    this._items = this._items.insert(atIndex, newSense);
  }

  deleteSense(atIndex: number): void {
    this._items = this._items.delete(atIndex);
  }

  modifySenseSummary(atIndex: number, to: string): void {
    this._items = this._items.update(atIndex, item => item.getContent().summary = to)
  }
}
