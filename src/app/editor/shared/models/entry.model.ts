import {List} from 'immutable';

export abstract class Entry {
  // single source of truth
  private _name = '';
  private _pos: number = null;
  private _phonetics: List<Phonetic> = List([]);
  private _spellings: List<Spelling> = List([]);
  private _senses: List<Sense> = List([]);
  private _examples: List<Example> = List([]);
  private _stories: List<Story> = List([]);
  // helper functions
  private changeListElementOrder<T>(list: List<T>, from: number, to: number): List<T> {
    // check validity of from and to values
    (function () {
      const maxIndex = list.count() - 1;
      if (from < 0 || from > maxIndex) {
        throw new Error('Problematic "from" value');
      }
      if (to < 0 || to > maxIndex) {
        throw new Error('Problematic "to" value');
      }
    })();
    const itemToMove = list.get(from);
    return list.delete(from).insert(to, itemToMove);
  }
  // name APIs
  get name() {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
  }
  // pos APIs
  get pos() {
    return this._pos;
  }
  set pos(newPos: number) {
    this._pos = newPos;
  }
  // phonetics APIs
  get phonetics() {
    return this._phonetics;
  }
  public addPhonetic(newPhonetic: Phonetic) {
    this._phonetics = this._phonetics.push(newPhonetic);
  }
  public deletePhonetic(index: number) {
    this._phonetics = this._phonetics.delete(index);
  }
  public insertPhonetic(newPhonetic: Phonetic, index: number) {
    this._phonetics = this._phonetics.insert(index, newPhonetic);
  }
  public updatePhonetic(newPhonetic: Phonetic, index: number) {
    this._phonetics = this._phonetics.set(index, newPhonetic);
  }
  public changePhoneticsOrder(from: number, to: number) {
    this._phonetics = this.changeListElementOrder<Phonetic>(this._phonetics, from, to);
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

export interface Phonetic {
  region: number;
  symbol: string;
}

export interface Spelling {
  type: number;
  text: string;
}

export interface Sense {
  id: number;
  mark: List<number>;
  text: string;
  translations: List<string>;
  subSenses: List<Subsense>;
}

export interface SubSense {
  id: number;
  mark: List<number>;
  text: string;
  translations: List<string>;
}

export interface Example {
  sense: number;
  text: string;
  translations: List<string>;
  source: ExampleSource;
}

export interface Story {
  type: number;
  text: string;
}

export interface ExampleSource {
  sourceType: number;
  sourceName: string;
  sourceLocation: string;
}





/////
senses: [{text: "xxx", subsenses: [{text: "yyy"}, {text: "zzz"}]}]



















