import {Item} from './item.class';
import {Phonetic} from './phonetic.class';
import {BaseSense} from './base-sense.class';
import {Example} from './example.class';
import {Story} from './story.class';
import {List} from 'immutable';
import {Inflection} from './inflection.class';

export class SenseGroup extends Item {
  private _pos: number;
  private _phonetics: List<Phonetic>;
  private _inflections: List<Inflection>;
  private _baseSenses: List<BaseSense>;
  private _examples: List<Example>;
  private _stories: List<Story>;

  constructor(
    id: number,
    pos: number,
    phonetics: List<Phonetic>,
    inflections: List<Inflection>,
    baseSenses: List<BaseSense>,
    examples: List<Example>,
    stories: List<Story>
  ) {
    super(id);
    this._type = 'SENSEGROUP';
    this._pos = pos;
    this._phonetics = phonetics;
    this._inflections = inflections;
    this._baseSenses = baseSenses;
    this._examples = examples;
    this._stories = stories;
  }

  get pos() {
    return this._pos;
  }
  get phonetics() {
    return this._phonetics;
  }
  get inflections() {
    return this.inflections;
  }
  get baseSenses() {
    return this._baseSenses;
  }
  get examples() {
    return this._examples;
  }
  get stories() {
    return this._stories;
  }

  // public refreshInflections(newPos: number) {
  //   if (newPos !== this._pos) {
  //     switch (newPos) {
  //       case
  //     }
  //   }
  // }
}
