import {Storable} from './storable.class';
import {AbstractStory} from './abstract-story.class';
import {AbstractExample} from './abstract-example.class';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {List} from 'immutable';

export abstract class Examplable extends Storable {
  protected constructor(
    id: number,
    type: string,
    text: string,
    translations: Array<string>,
    stories: Array<AbstractStory>,
    protected _examples: Array<AbstractExample>
  ) {
    super(id, type, text, translations, stories);
  }

  get examples() {
    return List(this._examples);
  }

  /** Methods to change examples */
  public addExample(toIndex: number, newExample: AbstractExample) {
    this._examples.splice(toIndex, 0, newExample);
  }

  public deleteExample(index: number) {
    this._examples.splice(index, 1);
  }

  public changeExamplesOrder(from: number, to: number) {
    moveItemInArray(this._examples, from, to);
  }

  public addExampleTranslation(toExample: number, atIndex: number, text: string) {
    this._examples[toExample].addTranslation(atIndex, text);
  }

  public deleteExampleTranslation(fromExample: number, atIndex: number) {
    this._examples[fromExample].deleteTranslation(atIndex);
  }

  public modifyExampleTranslation(ofExample: number, atIndex: number, to: string) {
    this._examples[ofExample].modifyTranslation(atIndex, to);
  }

  public changeExampleTranslationOrder(ofExample: number, fromIndex: number, toIndex: number) {
    this._examples[ofExample].changeTranslationsOrder(fromIndex, toIndex);
  }

  public addExampleStory(toExample: number, atIndex: number, newStory: AbstractStory) {
    this._examples[toExample].addStory(atIndex, newStory);
  }

  public deleteExampleStory(fromExample: number, atIndex: number) {
    this._examples[fromExample].deleteStory(atIndex);
  }

  public changeExampleStoryOrder(onExample: number, fromIndex: number, toIndex: number) {
    this._examples[onExample].changeStoryOrder(fromIndex, toIndex);
  }

  public modifyExampleStoryTitle(onExample: number, atIndex: number, to: string) {
    this._examples[onExample].modifyStoryTitle(atIndex, to);
  }

  public modifyExampleStoryText(onExample: number, atIndex: number, to: string) {
    this._examples[onExample].modifyStoryText(atIndex, to);
  }
}
