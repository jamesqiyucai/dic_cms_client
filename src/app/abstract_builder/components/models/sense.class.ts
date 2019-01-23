import {List} from 'immutable';
import {Item} from './item.class';

export abstract class Sense extends Item {
  protected _text: string;
  protected _translations: List<string>;
  protected constructor(id: number, text: string, translations: List<string>) {
    super(id);
    this._text = text;
    this._translations = translations;
  }
}
