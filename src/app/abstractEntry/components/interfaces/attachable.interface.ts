import {Item} from './item.interface';
import {List} from 'immutable';

export interface Attachable extends Item {
  attachments: List<Item>;
}
