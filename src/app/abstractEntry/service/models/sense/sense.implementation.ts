import {Sense} from './sense.interface';
import {List} from 'immutable';
import {changeElementOrder} from '../../../../../utils/changeElementOrder.function';

export class SenseImpl implements Sense {
  readonly id: number;
  private _pos: number;
  private _firstLevel: number;
  private _secondLevel: number;
  private _tags: List<number>;
  private _text: string;
  constructor(id: number, pos: number, firstLevel: number, secondLevel: number, tags: number[], text: string) {
    this.id = id;
    this._pos = pos;
    this._firstLevel = firstLevel;
    this._secondLevel = secondLevel;
    this._tags = List(tags);
    this._text = text;
  }
  get pos() {
    return this._pos;
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
  public changePos(newPos: number): number {
    this._pos = newPos;
    return this.pos;
  }

  public changeFirstLevel(newLevel: number): number {
    this._firstLevel = newLevel;
    return this.firstLevel;
  }
  public changeSecondLevel(newLevel: number): number {
    this._secondLevel = newLevel;
    return this.secondLevel;
  }
  public changeText(newText: string): string {
    this._text = newText;
    return this.text;
  }
  public addTag(tag: number): List<number> {
    return this._tags.push(tag);
  }
  public deleteTag(tag: number): List<number> {
    return this._tags.delete(tag);
  }
  public moveTag(from: number, to: number): List<number> {
    this._tags = changeElementOrder(this._tags, from, to);
    return this.tags;
  }
}
