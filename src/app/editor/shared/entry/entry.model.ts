import {List, Map, OrderedMap} from 'immutable';
import {Entry} from './entry.interface';
import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';

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
    senses: Sense[],
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
  public changePhoneticsOrder(from: number, to: number) {
    this._phonetics = this.changeListElementOrder<Phonetic>(this._phonetics, from, to);
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
    if (this._senses.get(senseID.toString()).level === 1) {
      this._sensesOrder.get(senseID.toString()).forEach(id => {
        this._sensesOrder.set(id.toString(), List());
      });
      this._sensesOrder.delete(senseID.toString());
    } else if (this._senses.get(senseID.toString()).level === 2) {
      this._sensesOrder.forEach((list, key) => {
        if (list.includes(senseID)) {
          this._sensesOrder.update(key, value => value.delete(senseID));
        }
      });
    }
    this._senses = this._senses.delete(senseID.toString());
    return this._senses;
  }
  public updateSense(newSense: Sense, index: number) {
    return this._senses.update(index.toString(), () => newSense);
  }
  // sensesOrder APIs
  get sensesOrder() {
    return this._sensesOrder;
  }
  public moveChildSenseWithinParent(parentSenseID: number, currentIndex: number, newIndex: number) {
    this._sensesOrder = this._sensesOrder.update(
      parentSenseID.toString(),
        senses => this.changeListElementOrder<number>(senses[currentIndex], currentIndex, newIndex)
    );
  }
  public moveChildSenseToNewParent(
    senseID: number,
    currentParentSenseID: number,
    newParentSenseID: number,
    currentIndex: number,
    newIndex: number
  ): void {
    this._sensesOrder = this._sensesOrder.update(
      currentParentSenseID.toString(),
      senses => senses.delete(currentIndex)
      ).update(
        newParentSenseID.toString(),
        senses => senses.insert(newIndex, senseID)
      );
  }
}


















