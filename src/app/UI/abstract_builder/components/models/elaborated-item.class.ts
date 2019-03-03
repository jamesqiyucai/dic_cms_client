import {TranslatableItem} from './translatable-item.class';
import {List} from 'immutable';
import {changeElementOrder} from '../../../../../utils/changeElementOrder.function';
import {AbstractStory} from './abstract-story.class';

export abstract class ElaboratedItem extends TranslatableItem {
  protected constructor(
    id: number,
    type: string,
    text: string,
    translations: List<string>,
    protected _stories: List<AbstractStory>
  ) {
    super(id, type, text, translations);
  }

  get stories() {
    return this._stories;
  }

  /** Methods to change stories */
  public addStory(newStory: AbstractStory) {
    this._stories = this._stories.push(newStory);
  }
  public deleteStory(index: number) {
    this._stories = this._stories.delete(index);
  }
  public changeStoriesOrder(from: number, to: number) {
    this._stories = changeElementOrder(this._stories, from, to);
  }
}
