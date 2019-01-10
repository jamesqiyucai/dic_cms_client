import {EntryImpl} from '../abstract_entry/service/models/entry.implementation';
import {Spelling} from '../abstract_entry/service/models/spelling/spelling.interface';
import {List} from 'immutable';
import {WordEntry} from './word-entry.interface';
import {changeElementOrder} from '../../utils/changeElementOrder.function';

export class WordEntryImpl extends EntryImpl implements WordEntry {
  private _spellings: List<Spelling>;
  // Spelling methods
  get spellings() {
    return this._spellings;
  }
  public updateSpellings(newSpellings: List<Spelling>): any {
    this._spellings = newSpellings;
  }

  // public addSpelling(newSpelling: Spelling): List<Spelling> {
  //   this._spellings = this._spellings.push(newSpelling);
  //   return this.spellings;
  // }
  // public updateSpelling(newSpelling: Spelling, index: number): List<Spelling> {
  //   this._spellings = this.spellings.update(index, () => newSpelling);
  //   return this.spellings;
  // }
  // public deleteSpelling(index: number): List<Spelling> {
  //   this._spellings = this._spellings.delete(index);
  //   return this.spellings;
  // }
  // public changeSpellingOrder(from: number, to: number): List<Spelling> {
  //   this._spellings = changeElementOrder(this._spellings, from, to);
  //   return this.spellings;
  // }
}
