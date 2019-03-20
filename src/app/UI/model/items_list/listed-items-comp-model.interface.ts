import {StoryComp} from '../story/story-comp.class';
import {ExampleComp} from '../example/example-comp.class';
import {SenseComp} from '../sense/sense-comp.class';
import {List} from 'immutable';
import {ListedItemComp} from '../listed_item/listed-item-comp.interface';

export interface ListedItemsCompModel {
  items: List<ListedItemComp>;

  addStoryToExample(index: number, ofItem: number, atIndex: number): void;
  addStoryToSense(index: number, atIndex: number): void;
  deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void;
  deleteStoryFromSense(index: number, atIndex: number): void;
  modifyStoryTitleInSense(number: number, atIndex: number, to: string): void;
  modifyStoryTextInSense(number: number, atIndex: number, to: string): void;
  modifyStoryTitleInExample(number: number, inSense: number, atIndex: number, to: string): void;
  modifyStoryTextInExample(number: number, inSense: number, atIndex: number, to: string): void;

  addExample(toItem: number, atIndex: number): void;
  deleteExample(fromItem: number, atIndex: number): void;
  modifyExampleText(atExample: number, ofSense: number, to: string): void;
  addExampleTranslation(inSense: number, toExample: number): void;
  modifyExampleTranslation(inSense: number, example: number, atIndex: number, to: string): void;
  deleteExampleTranslation(inSense: number, example: number, atIndex: number): void;

  addSense(atIndex: number, newSense: ListedItemComp): void;
  deleteSense(atIndex: number): void;
  modifySenseSummary(atIndex: number, to: string): void;
  modifySenseText(atIndex: number, to: string): void;
  addSenseTag(toSense: number): void;
  deleteSenseTag(fromSense: number, atIndex: number): void;
  modifySenseTag(atSense: number, atIndex: number, to: number): void;
  addSenseTranslation(atSense: number): void;
  modifySenseTranslation(atSense: number, atIndex: number, to: string);
  deleteSenseTranslation(atSense: number, atIndex: number): void;

  addSeparator(atIndex: number, separator: ListedItemComp): void;
  deleteSeparator(atIndex: number): void;
}
