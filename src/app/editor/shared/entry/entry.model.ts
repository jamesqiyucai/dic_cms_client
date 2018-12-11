import {List, OrderedMap} from 'immutable';
import {Entry} from './entry.interface';
import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';
import {changeElementOrder} from '../../../../helpers/changeElementOrder.function';

export abstract class EntryImpl implements Entry {
  // single source of truth
  private _name;
  private _pos: number;
  private _phonetics: List<Phonetic>;
  private _senses: OrderedMap<string, Sense>;
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
    this._senses = OrderedMap<string, Sense>(<Array<[string, Sense]>>(senses.map(sense => [sense.id.toString(), sense])));
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
    return this._phonetics;
  }
  public deletePhonetic(index: number) {
    this._phonetics = this._phonetics.delete(index);
    return this._phonetics;
  }
  public insertPhonetic(newPhonetic: Phonetic, index: number) {
    this._phonetics = this._phonetics.insert(index, newPhonetic);
    return this._phonetics;
  }
  public updatePhonetic(newPhonetic: Phonetic, index: number) {
    this._phonetics = this._phonetics.set(index, newPhonetic);
    return this._phonetics;
  }
  public movePhonetic(from: number, to: number) {
    this._phonetics = changeElementOrder<Phonetic>(this._phonetics, from, to);
    return this._phonetics;
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
    return this._senses;
  }
  public deleteSenseByID(senseID: number) {
    this._senses = this._senses.delete(senseID.toString());
    return this._senses;
  }
  public updateSenseByID(newSense: Sense, ID: number) {
    this._senses = this._senses.update(ID.toString(), () => newSense);
    return this._senses;
  }
  public moveSense(from: number, to: number): OrderedMap<string, Sense> {
    this._senses = changeElementOrder<Sense>(this._senses, from, to);
    return this._senses;
  }
}


















