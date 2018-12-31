import {Entry} from '../abstractEntry/service/models/entry.interface';
import {Spelling} from '../abstractEntry/service/models/spelling/spelling.interface';
import {List} from 'immutable';

export interface WordEntry extends Entry {
  readonly spellings: List<Spelling>;
  updateSpellings(newSpellings: List<Spelling>): any;
  // addSpelling(newSpelling: Spelling): List<Spelling>;
  // updateSpelling(newSpelling: Spelling, index: number): List<Spelling>;
  // deleteSpelling(index: number): List<Spelling>;
  // changeSpellingOrder(from: number, to: number): List<Spelling>;
}
