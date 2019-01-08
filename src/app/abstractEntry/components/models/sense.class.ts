import {List} from 'immutable';
import {Item} from './item.class';

export abstract class Sense extends Item {
  text: string;
  translations: string[];
  protected constructor(id: number, text: string, translations: string[]) {
    super(id);
    this.text = text;
    this.translations = translations;
  }
}
