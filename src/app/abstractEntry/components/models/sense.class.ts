import {List} from 'immutable';
import {Item} from './item.class';

export abstract class Sense extends Item {
  text = '';
  translations: List<string> = List();
}
