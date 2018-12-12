import {List, Map} from 'immutable';
import {Entry} from './entry.interface';
import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';
import {changeElementOrder} from '../../../../helpers/changeElementOrder.function';

export abstract class EntryImpl implements Entry {
  // single source of truth
  private _name;
  private _pos: number;
  private _phonetics: List<Phonetic>;
  private _senses: Map<string, Sense>;
  // util functions
  // private _sortSenses(senses: Map<string, Sense>): Map<string, Sense> {
  //   return senses.sort((a, b) => {
  //     if (a.firstLevel < b.firstLevel) { return -1; }
  //     if (a.firstLevel > b.firstLevel) { return 1; }
  //     if (a.firstLevel === b.firstLevel) {
  //       if (a.secondLevel < b.secondLevel) { return -1; }
  //       if (a.secondLevel > b.secondLevel) { return 1; }
  //       if (a.secondLevel === b.secondLevel) { throw new Error('two same level senses'); }
  //     }
  //   });
  // }
  private turnSensesArrayIntoMap(array: Array<Sense>): Map<string, Sense> {
    const tuplesArray: Array<[string, Sense]> = array.map(sense => {
      const tuple: [string, Sense] = [null, null];
      tuple[0] = sense.id.toString();
      tuple[1] = sense;
      return tuple;
    });
    return Map(tuplesArray);
  }
  // private _examples: List<Example>;
  // private _stories: List<Story>;
  constructor(
    name: string,
    pos: number | null,
    phonetics: Array<Phonetic>,
    senses: Array<Sense>,
    // examples: Array<Example>,
    // stories: Array<Story>
  ) {
    this._name = name;
    this._pos = pos;
    this._phonetics = List(phonetics);
    this._senses = this.turnSensesArrayIntoMap(senses);
  }
  // helper functions
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
    return this.phonetics;
  }
  public deletePhonetic(index: number) {
    this._phonetics = this._phonetics.delete(index);
    return this.phonetics;
  }
  public insertPhonetic(newPhonetic: Phonetic, index: number) {
    this._phonetics = this._phonetics.insert(index, newPhonetic);
    return this.phonetics;
  }
  public updatePhonetic(newPhonetic: Phonetic, index: number) {
    this._phonetics = this._phonetics.set(index, newPhonetic);
    return this.phonetics;
  }
  public movePhonetic(from: number, to: number) {
    this._phonetics = changeElementOrder<Phonetic>(this._phonetics, from, to);
    return this.phonetics;
  }
  // senses APIs
  get senses() {
    return this._senses;
  }
  public getSenseByID(senseID: number) {
    return this._senses.find((sense) => {
      return sense.id === senseID;
    });
  }
  public addSense(newSense: Sense) {
    this._senses = this._senses.set(newSense.id.toString(), newSense);
    return this.senses;
  }
  public deleteSenseByID(senseID: number) {
    this._senses = this._senses.delete(senseID.toString());
    return this.senses;
  }
  public updateSenseByID(newSense: Sense, ID: number) {
    this._senses = this._senses.update(ID.toString(), () => newSense);
    return this.senses;
  }
}


















