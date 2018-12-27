import {Attachable} from './attachable.interface';
import {List} from 'immutable';

export interface Example extends Attachable {
  text: string;
  translations: List<string>;
  source: string;
  location: string;
}
