import {Examplable} from './examplable.class';
import {List} from 'immutable';
import {AbstractStory} from './abstract-story.class';
import {AbstractExample} from './abstract-example.class';
import {changeElementOrder} from '../../../../utils/changeElementOrder.function';
import {AbstractSensePosition} from './abstract-sense-position.class';
import {BuilderComponentModelTypes} from './model-types.enum';

export abstract class AbstractSense extends Examplable {
  protected constructor(
    id: number,
    text: string,
    translations: List<string>,
    stories: List<AbstractStory>,
    examples: List<AbstractExample>,
    protected _pos: number,
    protected _position: AbstractSensePosition,
    protected _summary: string,
    protected _tags: List<number>
  ) {
    super(id, BuilderComponentModelTypes.sense, text, translations, stories, examples);
  }

  get pos() {
    return this._pos;
  }
  set pos(newPos: number) {
    if (newPos !== null) {
      this._pos = newPos;
    } else {
      alert('POS Shall Never Be Null');
    }
  }
  get group() {
    return this._position.group;
  }
  get order() {
    return this._position.order;
  }
  set group(newGroup: number) {
    this._position.group = newGroup;
  }
  set order(newOrder: number) {
    this._position.order = newOrder;
  }
  get summary() {
    return this._summary;
  }
  set summary(newSummary: string) {
    this._summary = newSummary;
  }
  get tags() {
    return this._tags;
  }

  public addTag(newTag: number) {
    this._tags = this._tags.push(newTag);
  }
  public deleteTag(index: number) {
    this._tags = this._tags.delete(index);
  }
  public changeTagsOrder(from: number, to: number) {
    this._tags = changeElementOrder(this._tags, from, to);
  }
}
