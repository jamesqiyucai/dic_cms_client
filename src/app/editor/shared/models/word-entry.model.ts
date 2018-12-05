import {Entry} from './entry.model';
import {List} from 'immutable';

export class WordEntry extends Entry {
  private _spellings: List<Spelling> = List([]);
  constructor() {
    super();
  }
  // spellings APIs
  get spellings() {
    return this._spellings;
  }
  public addSpelling(newSpelling: Spelling) {
    this._spellings = this._spellings.push(newSpelling);
  }
  public deleteSpelling(index: number) {
    this._spellings = this._spellings.delete(index);
  }
  public insertSpelling(newSpelling: Spelling, index: number) {
    this._spellings = this._spellings.insert(index, newSpelling);
  }
  public updateSpelling(newSpelling: Spelling, index: number) {
    this._spellings = this._spellings.set(index, newSpelling);
  }
  public changeSpellingsOrder(from: number, to: number) {
    this._spellings = this.changeListElementOrder<Spelling>(this._spellings, from, to);
  }

}

export interface Spelling {
  type: number;
  text: string;
}

