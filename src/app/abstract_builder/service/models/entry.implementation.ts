import {List, Map} from 'immutable';
import {Entry} from './entry.interface';
import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';
import {changeElementOrder} from '../../../../utils/changeElementOrder.function';

type ID = number;

export abstract class EntryImpl implements Entry {
  // single source of truth
  private _name;
  private _phonetics: List<Phonetic>;
  private _senses: Map<ID, Sense>;
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
  private turnSensesArrayIntoMap(array: Array<Sense>): Map<ID, Sense> {
    const tuplesArray: Array<[ID, Sense]> = array.map(sense => {
      const tuple: [ID, Sense] = [null, null];
      tuple[0] = sense.id;
      tuple[1] = sense;
      return tuple;
    });
    return Map(tuplesArray);
  }
  // private _examples: List<AbstractExample>;
  // private _stories: List<Story>;
  constructor(
    name: string,
    phonetics: Array<Phonetic>,
    senses: Array<Sense>,
    // examples: Array<AbstractExample>,
    // stories: Array<Story>
  ) {
    this._name = name;
    this._phonetics = List(phonetics);
    this._senses = this.turnSensesArrayIntoMap(senses);
  }
  // helper functions
  // name APIs
  get name() {
    return this._name;
  }
  set name(newName: string) {
    if (/ /.test(newName)) {
      console.log('tried to set a phrase or something else to be a word entry name');
    } else {
      this._name = newName;
    }
  }
  // phonetics APIs
  get phonetics() {
    return this._phonetics;
  }
  public updatePhonetics(newPhonetics: List<Phonetic>): any {
    this._phonetics = newPhonetics;
  }

  // public addPhonetic(newPhonetic: AbstractPhonetic) {
  //   this._phonetics = this._phonetics.push(newPhonetic);
  //   return this.phonetics;
  // }
  // public deletePhonetic(index: number) {
  //   this._phonetics = this._phonetics.delete(index);
  //   return this.phonetics;
  // }
  // public insertPhonetic(newPhonetic: AbstractPhonetic, index: number) {
  //   this._phonetics = this._phonetics.insert(index, newPhonetic);
  //   return this.phonetics;
  // }
  // public updatePhonetic(newPhonetic: AbstractPhonetic, index: number) {
  //   this._phonetics = this._phonetics.set(index, newPhonetic);
  //   return this.phonetics;
  // }
  // public movePhonetic(from: number, to: number) {
  //   this._phonetics = changeElementOrder<AbstractPhonetic>(this._phonetics, from, to);
  //   return this.phonetics;
  // }
  // senses APIs
  get senses() {
    return this._senses;
  }
  // public getSenseByID(senseID: number) {
  //   return this._senses.find((sense) => {
  //     return sense.id === senseID;
  //   });
  // }
  // public addSense(newSense: Sense) {
  //   this._senses = this._senses.set(newSense.id, newSense);
  //   return this.senses;
  // }
  // public deleteSenseByID(senseID: number) {
  //   this._senses = this._senses.delete(senseID);
  //   return this.senses;
  // }
  // public updateSenseByID(newSense: Sense, id: number) {
  //   this._senses = this._senses.update(id, () => newSense);
  //   return this.senses;
  // }
  public updateSenses(newSenses: Map<ID, Sense>) {
    this._senses = newSenses;
  }
}


















