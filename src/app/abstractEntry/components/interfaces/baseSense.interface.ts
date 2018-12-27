import {Attachable} from './attachable.interface';
import {List} from 'immutable';

export interface BaseSense extends Attachable {
  text: string;
  tags?: List<number>;
  translations: List<string>;
}
