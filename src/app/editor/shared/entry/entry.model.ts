// import {List} from 'immutable';
//
// export abstract class Entry {
//   // single source of truth
//   private _name = '';
//   private _pos: number = null;
//   private _phonetics: List<Phonetic> = List();
//   private _senses: List<Sense> = List();
//   private _examples: List<Example> = List();
//   private _stories: List<Story> = List();
//   constructor(name: string, pos: number, phonetics: Array<Phonetic>, senses: Array<Sense>, examples: Array<Example>, stories: Array<Story>) {
//     this._name = name;
//     this._pos = pose;
//     this._phonetics = List.of(phonetics);
//     this._senses = List.of(senses);
//     this._examples = List.of(examples);
//     this._stories = List.of(stories);
//   }
//   constructor() {}
//   // helper functions
//   private changeListElementOrder<T>(list: List<T>, from: number, to: number): List<T> {
//     // check validity of from and to values
//     (function () {
//       const maxIndex = list.count() - 1;
//       if (from < 0 || from > maxIndex) {
//         throw new Error('Problematic "from" value');
//       }
//       if (to < 0 || to > maxIndex) {
//         throw new Error('Problematic "to" value');
//       }
//     })();
//     const itemToMove = list.get(from);
//     return list.delete(from).insert(to, itemToMove);
//   }
//   // name APIs
//   get name() {
//     return this._name;
//   }
//   set name(newName: string) {
//     this._name = newName;
//   }
//   // pos APIs
//   get pos() {
//     return this._pos;
//   }
//   set pos(newPos: number) {
//     this._pos = newPos;
//   }
//   // phonetics APIs
//   get phonetics() {
//     return this._phonetics;
//   }
//   public addPhonetic(newPhonetic: Phonetic) {
//     this._phonetics = this._phonetics.push(newPhonetic);
//   }
//   public deletePhonetic(index: number) {
//     this._phonetics = this._phonetics.delete(index);
//   }
//   public insertPhonetic(newPhonetic: Phonetic, index: number) {
//     this._phonetics = this._phonetics.insert(index, newPhonetic);
//   }
//   public updatePhonetic(newPhonetic: Phonetic, index: number) {
//     this._phonetics = this._phonetics.set(index, newPhonetic);
//   }
//   public changePhoneticsOrder(from: number, to: number) {
//     this._phonetics = this.changeListElementOrder<Phonetic>(this._phonetics, from, to);
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
