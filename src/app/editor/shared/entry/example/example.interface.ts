import {List} from 'immutable';
import {Source} from '../source/source.interface';

export interface Example {
  sense: number;
  text: string;
  translations: List<string>;
  source: Source;
}
