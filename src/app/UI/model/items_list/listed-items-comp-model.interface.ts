import {ListedItemComp} from '../listed_item/listed-item-comp.interface';
import {ExampleComp} from '../example/example-comp.class';
import {StoryComp} from '../story/story-comp.class';
import {List} from 'immutable';

export interface ListedItemsCompModel {
  items: List<ListedItemComp>;

  addStoryToExample(index: number, ofItem: number, atIndex: number, newStory: StoryComp): void;
  addStoryToSense(index: number, atIndex: number, newStory): void;
  deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void;
  deleteStoryFromSense(index: number, atIndex: number): void;
  modifyStoryTitleInSense(index: number, atIndex: number, to: string): void;
  modifyStoryTextInSense(index: number, atIndex: number, to: string): void;
  modifyStoryTitleInExample(index: number, inSense: number, atIndex: number, to: string): void;
  modifyStoryTextInExample(index: number, inSense: number, atIndex: number, to: string): void;
  changeStoryOrderInSense(index: number, fromIndex: number, toIndex: number): void;
  changeStoryOrderInExample(index: number, ofItem: number, fromIndex: number, toIndex: number): void;

  addExample(toItem: number, atIndex: number, newExample: ExampleComp): void;
  deleteExample(fromItem: number, atIndex: number): void;
  changeExampleOrder(ofItem: number, fromIndex: number, toIndex: number): void;
  modifyExampleText(atExample: number, ofSense: number, to: string): void;
  addExampleTranslation(inSense: number, toExample: number): void;
  modifyExampleTranslation(inSense: number, example: number, atIndex: number, to: string): void;
  deleteExampleTranslation(inSense: number, fromExample: number, atIndex: number): void;
  changeExampleTranslationOrder(inSense: number, atIndex: number, fromIndex: number, toIndex: number): void;

  addSense(atIndex: number, newSense: ListedItemComp): void;
  deleteSense(atIndex: number): void;
  modifySenseSummary(atIndex: number, to: string): void;
  modifySenseText(atIndex: number, to: string): void;
  addSenseTag(toSense: number): void;
  deleteSenseTag(fromSense: number, atIndex: number): void;
  modifySenseTag(atSense: number, atIndex: number, to: number): void;
  changeSenseTagOrder(atSense: number, fromIndex: number, toIndex: number): void;
  addSenseTranslation(atSense: number): void;
  modifySenseTranslation(atSense: number, atIndex: number, to: string);
  deleteSenseTranslation(atSense: number, atIndex: number): void;
  changeSenseTranslationOrder(atSense: number, fromIndex: number, toIndex: number): void;

  addSeparator(atIndex: number, separator: ListedItemComp): void;
  deleteSeparator(atIndex: number): void;
}
