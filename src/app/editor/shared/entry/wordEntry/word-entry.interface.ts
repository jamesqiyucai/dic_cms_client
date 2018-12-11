import {Entry} from '../entry.interface';
import {Spelling} from '../spelling/spelling.interface';
import {List} from 'immutable';

export interface WordEntry extends Entry {
  spellings: List<Spelling>;
  addSpelling(newSpelling: Spelling): List<Spelling>;
  updateSpelling(newSpelling: Spelling, index: number): List<Spelling>;
  deleteSpelling(index: number): List<Spelling>;
  changeSpellingOrder(from: number, to: number): List<Spelling>;
}
