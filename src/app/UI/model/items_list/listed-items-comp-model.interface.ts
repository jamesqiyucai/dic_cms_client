import {StoryComp} from '../story/story-comp.class';
import {ExampleComp} from '../example/example-comp.class';
import {SenseComp} from '../sense/sense-comp.class';
import {List} from 'immutable';
import {ListedItemComp} from '../listed_item/listed-item-comp.interface';

export interface ListedItemsCompModel {
  items: List<ListedItemComp>;

  addStoryToExample(index: number, ofItem: number, atIndex: number): void;
  addStoryToSense(index: number, atIndex: number): void;
  modifyStoryInExample(index: number, ofItem: number, atIndex: number, to: StoryComp): void;
  modifyStoryInSense(index: number, atIndex: number, to: StoryComp): void;
  deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void;
  deleteStoryFromSense(index: number, atIndex: number): void;

  addExample(toItem: number, atIndex: number): void;
  modifyExample(atIndex: number, ofItem: number, to: ExampleComp): void;
  deleteExample(fromItem: number, atIndex: number): void;

  addSense(atIndex: number): void;
  modifySense(atIndex: number, to: SenseComp): void;
  deleteSense(atIndex: number): void;

  addSeparator(atIndex: number): void;
  deleteSeparator(atIndex: number): void;
}
