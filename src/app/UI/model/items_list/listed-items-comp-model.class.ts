import {ListedItemsCompModel} from './listed-items-comp-model.interface';
import {ListedItemComp} from '../listed_item/listed-item-comp.interface';
import {ExampleComp} from '../example/example-comp.class';
import {StoryComp} from '../story/story-comp.class';
import {List} from 'immutable';
import {moveItemInArray} from '@angular/cdk/drag-drop';

export class ListedItemsCompModelImpl implements ListedItemsCompModel {
  constructor(private _items: Array<ListedItemComp>) {}

  get items() {
    return List(this._items);
  }

  // Methods on Separator
  public addSeparator(atIndex: number, separator: ListedItemComp): void {
    this._items.splice(atIndex, 0, separator);
  }

  public deleteSeparator(atIndex: number): void {
    this._items.splice(atIndex, 1);
  }

  // Methods on Sense
  public addSense(atIndex: number, newSense: ListedItemComp): void {
    this._items.splice(atIndex, 0, newSense);
  }

  public deleteSense(atIndex: number): void {
    this._items.splice(atIndex, 1);
  }

  public changeSenseOrder(fromIndex: number, toIndex: number): void {
    moveItemInArray(this._items, fromIndex, toIndex);
  }

  public modifySenseSummary(atIndex: number, to: string): void {
    this._items[atIndex].getSense().summary = to;
  }

  public modifySenseText(atIndex: number, to: string): void {
    this._items[atIndex].getSense().text = to;
  }

  public addSenseTag(toSense: number): void {
    this._items[toSense].getSense().addTag(1);
  }

  public deleteSenseTag(fromSense: number, atIndex: number): void {
    this._items[fromSense].getSense().deleteTag(atIndex);
  }

  public modifySenseTag(atSense: number, atIndex: number, to: number): void {
    this._items[atSense].getSense().modifyTag(atIndex, to);
  }

  public changeSenseTagOrder(atSense: number, fromIndex: number, toIndex: number): void {
    this._items[atSense].getSense().changeTagsOrder(fromIndex, toIndex);
  }

  public addSenseTranslation(atSense: number): void {
    this._items[atSense].getSense().addTranslation('');
  }

  public modifySenseTranslation(atSense: number, atIndex: number, to: string) {
    this._items[atSense].getSense().modifyTranslation(atIndex, to);
  }

  public deleteSenseTranslation(atSense: number, atIndex: number): void {
    this._items[atSense].getSense().deleteTranslation(atIndex);
  }

  public changeSenseTranslationOrder(atSense: number, fromIndex: number, toIndex: number): void {
    this._items[atSense].getSense().changeTranslationsOrder(fromIndex, toIndex);
  }

  // Methods on Example
  public addExample(toItem: number, atIndex: number, newExample: ExampleComp): void {
    this._items[toItem].getSense().addExample(atIndex, newExample);
  }

  public deleteExample(fromItem: number, atIndex: number): void {
    this._items[fromItem].getSense().deleteExample(atIndex);
  }

  public changeExampleOrder(ofItem: number, fromIndex: number, toIndex: number): void {
    this._items[ofItem].getSense().changeExamplesOrder(fromIndex, toIndex);
  }

  public modifyExampleText(atExample: number, ofSense: number, to: string): void {
    this._items[ofSense].getSense().examples[atExample].text = to;
  }

  public modifyExampleTranslation(inSense: number, example: number, atIndex: number, to: string): void {
    this._items[inSense].getSense().modifyExampleTranslation(example, atIndex, to);
  }

  public addExampleTranslation(inSense: number, toExample: number): void {
    this._items[inSense].getSense().addExampleTranslation(toExample, '');
  }

  public deleteExampleTranslation(inSense: number, fromExample: number, atIndex: number): void {
    this._items[inSense].getSense().deleteExampleTranslation(fromExample, atIndex);
  }

  public changeExampleTranslationOrder(inSense: number, atIndex: number, fromIndex: number, toIndex: number): void {
    this._items[inSense].getSense().changeExampleTranslationOrder(atIndex, fromIndex, toIndex);
  }

  // Methods on Story
  public addStoryToExample(index: number, ofItem: number, atIndex: number, newStory: StoryComp): void {
    this._items[ofItem].getSense().addExampleStory(index, atIndex, newStory);
  }

  public addStoryToSense(index: number, atIndex: number, newStory): void {
    this._items[index].getSense().addStory(atIndex, newStory);
  }

  public deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void {
    this._items[ofItem].getSense().deleteExampleStory(index, atIndex);
  }

  public deleteStoryFromSense(index: number, atIndex: number): void {
    this._items[index].getSense().deleteStory(atIndex);
  }

  public modifyStoryTitleInSense(index: number, atIndex: number, to: string): void {
    this._items[index].getSense().modifyStoryTitle(atIndex, to);
  }

  public modifyStoryTextInSense(index: number, atIndex: number, to: string): void {
    this._items[index].getSense().modifyStoryText(atIndex, to);
  }

  public modifyStoryTitleInExample(index: number, inSense: number, atIndex: number, to: string): void {
    this._items[inSense].getSense().modifyExampleStoryTitle(index, atIndex, to);
  }

  public modifyStoryTextInExample(index: number, inSense: number, atIndex: number, to: string): void {
    this._items[inSense].getSense().modifyExampleStoryText(index, atIndex, to);
  }

  public changeStoryOrderInExample(index: number, ofItem: number, fromIndex: number, toIndex: number): void {
    this._items[ofItem].getSense().changeExampleStoryOrder(index, fromIndex, toIndex);
  }

  public changeStoryOrderInSense(index: number, fromIndex: number, toIndex: number): void {
    this._items[index].getSense().changeStoryOrder(fromIndex, toIndex);
  }
}
