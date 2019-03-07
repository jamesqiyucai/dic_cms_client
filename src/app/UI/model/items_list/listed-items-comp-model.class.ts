import {ListedItemsCompModel} from './listed-items-comp-model.interface';
import {List} from 'immutable';
import {SenseComp} from '../sense/sense-comp.class';
import {StoryComp} from '../story/story-comp.class';
import {ExampleComp} from '../example/example-comp.class';
import {ListedItemComp} from '../listed_item/listed-item-comp.interface';

export class ListedItemsCompModelImpl implements ListedItemsCompModel {
  constructor(readonly items: List<ListedItemComp>) {}

  addExample(toItem: number, atIndex: number): void {
  }

  addSense(atIndex: number): void {
  }

  addSeparator(atIndex: number): void {
  }

  addStoryToExample(index: number, ofItem: number, atIndex: number): void {
  }

  addStoryToSense(index: number, atIndex: number): void {
  }

  deleteExample(fromItem: number, atIndex: number): void {
  }

  deleteSense(atIndex: number): void {
  }

  deleteSeparator(atIndex: number): void {
  }

  deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void {
  }

  deleteStoryFromSense(index: number, atIndex: number): void {
  }

  modifyExample(atIndex: number, ofItem: number, to: ExampleComp): void {
  }

  modifySense(atIndex: number, to: SenseComp): void {
  }

  modifyStoryInExample(index: number, ofItem: number, atIndex: number, to: StoryComp): void {
  }

  modifyStoryInSense(index: number, atIndex: number, to: StoryComp): void {
  }
}
