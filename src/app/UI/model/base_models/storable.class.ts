import {Translatable} from './translatable.class';
import {List} from 'immutable';
import {AbstractStory} from './abstract-story.class';
import {moveItemInArray} from '@angular/cdk/drag-drop';

export abstract class Storable extends Translatable {
  protected constructor(
    id: number,
    type: string,
    text: string,
    translations: Array<string>,
    protected _stories: Array<AbstractStory>
  ) {
    super(id, type, text, translations);
  }

  get stories() {
    return List(this._stories);
  }

  /** Methods to change stories */
  public addStory(atIndex: number, newStory: AbstractStory) {
    this._stories.splice(atIndex, 0, newStory);
  }

  public deleteStory(index: number) {
    this._stories.splice(index, 1);
  }

  public changeStoryOrder(from: number, to: number) {
    moveItemInArray(this._stories, from, to);
  }

  public modifyStoryTitle(atIndex: number, to: string) {
    this._stories[atIndex].title = to;
  }

  public modifyStoryText(atIndex: number, to: string) {
    this._stories[atIndex].text = to;
  }
}
