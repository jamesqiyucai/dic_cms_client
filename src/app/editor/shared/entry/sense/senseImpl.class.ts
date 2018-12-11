import {Sense} from './sense.interface';
import {List} from 'immutable';
import {changeListElementOrder} from '../../../../../helpers/changeListElementOrder.function';

export class SenseImpl implements Sense {
  readonly id: number;
  private _firstLevel: number;
  private _secondLevel: number;
  private _tags: List<number>;
  private _text: string;
  constructor(id: number, firstLevel: number, secondLevel: number, tags: number[], text: string) {
    this.id = id;
    this._firstLevel = firstLevel;
    this._secondLevel = secondLevel;
    this._tags = List(tags);
    this._text = text;
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(newLevel: number) {
    this._firstLevel = newLevel;
  }
  get secondLevel() {
    return this._secondLevel;
  }
  set secondLevel(newLevel: number) {
    this._secondLevel = newLevel;
  }
  get tags() {
    return this._tags;
  }
  get text() {
    return this._text;
  }
  public changeFirstLevel(newLevel: number): number {
    this._firstLevel = newLevel;
    return this._firstLevel;
  }
  public changeSecondLevel(newLevel: number): number {
    this._secondLevel = newLevel;
    return this._secondLevel;
  }
  public changeText(newText: string): string {
    this._text = newText;
    return this._text;
  }
  public addTag(tag: number): List<number> {
    this._tags.push(tag);
    return this._tags;
  }
  public deleteTag(tag: number): List<number> {
    this._tags.delete(tag);
    return this._tags;
  }
  public moveTag(from: number, to: number): List<number> {
    this._tags = changeListElementOrder(this._tags, from, to);
    return this._tags;
  }
}
