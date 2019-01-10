import {List} from 'immutable';
import {Item} from './item.class';

export abstract class Sense extends Item {
  text: string;
  translations: List<string>;
  protected constructor(id: number, text: string, translations: List<string>) {
    super(id);
    this.text = text;
    this.translations = translations;
  }
}
