// import {Item} from './item.class';
// import {AbstractPhonetic} from './abstract-phonetic.class';
// import {List} from 'immutable';
// import {AbstractInflection} from './abstract-inflection.class';
// import {BuilderComponentModelTypes} from './model-types.enum';
// import {AbstractSense} from './abstract-sense.class';
// import {changeElementOrder} from '../../../../utils/changeElementOrder.function';
//
// export class AbstractSenseGroup extends Item {
//   constructor(
//     id: number,
//     protected _pos: number,
//     protected _phonetics: List<AbstractPhonetic>,
//     protected _inflections: List<AbstractInflection>,
//     protected _senses: List<AbstractSense>
//   ) {
//     super(id, BuilderComponentModelTypes.senseGroup);
//   }
//
//   get pos() {
//     return this._pos;
//   }
//   get phonetics() {
//     return this._phonetics;
//   }
//   get inflections() {
//     return this.inflections;
//   }
//   get senses() {
//     return this._senses;
//   }
//
//   public addPhonetic(newPhonetic: AbstractPhonetic) {
//     this._phonetics = this._phonetics.push(newPhonetic);
//   }
//   public deletePhonetic(index: number) {
//     this._phonetics = this._phonetics.delete(index);
//   }
//   public changePhoneticsOrder(from: number, to: number) {
//     this._phonetics = changeElementOrder(this._phonetics, from ,to);
//   }
//   public addInflection(newInflection: AbstractInflection) {
//     this._inflections = this._inflections.push(newInflection);
//   }
//   public deleteInflection(index: number) {
//     this._inflections = this._inflections.delete(index);
//   }
//   public changeInflectionsOrder(from: number, to: number) {
//     this._inflections = changeElementOrder(this._inflections, from, to);
//   }
// }
