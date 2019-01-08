import {Item} from './item.class';
import {Phonetic} from './phonetic.class';
import {BaseSense} from './baseSense.class';
import {Example} from './example.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class SenseGroup extends Item {
  pos: number;
  phonetics: List<Phonetic>;
  baseSenses: List<BaseSense>;
  examples: List<Example>;
  stories: List<Story>;
  constructor(id: number, pos: number, phonetics: List<Phonetic>, baseSenses: List<BaseSense>, examples: List<Example>, stories: List<Story>) {
    super(id);
    this.pos = pos;
    this.phonetics = phonetics;
    this.baseSenses = baseSenses;
    this.examples = examples;
    this.stories = stories;
  }
}
