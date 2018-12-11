import {EntryImpl} from '../entry.model';
import {Spelling} from '../spelling/spelling.interface';
import {List} from 'immutable';

export class WordEntryImpl extends EntryImpl {
  private _spellings: List<Spelling>;
  // Spelling methods
  get spellings() {
    return this._spellings;
  }
  public addSpelling(newSpelling: Spelling) {
    this._spellings = this._spellings.push(newSpelling);
  }
  public
}
