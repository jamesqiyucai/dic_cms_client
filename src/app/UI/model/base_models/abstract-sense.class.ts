import {Examplable} from './examplable.class';
import {AbstractStory} from './abstract-story.class';
import {AbstractExample} from './abstract-example.class';
import {AbstractSensePosition} from './abstract-sense-position.class';
import {BuilderComponentModelTypes} from './model-types.enum';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {List} from 'immutable';

export abstract class AbstractSense extends Examplable {
  protected constructor(
    id: number,
    text: string,
    translations: Array<string>,
    stories: Array<AbstractStory>,
    examples: Array<AbstractExample>,
    protected _pos: number,
    protected _position: AbstractSensePosition,
    protected _summary: string,
    protected _tags: Array<number>
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
    return List(this._tags);
  }

  public addTag(newTag: number) {
    this._tags.push(newTag);
  }

  public deleteTag(index: number) {
    this._tags.splice(index, 1);
  }

  public changeTagsOrder(from: number, to: number) {
    moveItemInArray(this._tags, from, to);
  }

  public modifyTag(atIndex: number, to: number) {
    this._tags[atIndex] = to;
  }
}
