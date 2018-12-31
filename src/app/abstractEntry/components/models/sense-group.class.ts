import {Item} from './item.class';
import {Phonetic} from './phonetic.class';
import {BaseSense} from './baseSense.class';
import {Example} from './example.class';
import {Story} from './story.class';

export class SenseGroup extends Item {
  pos = 1;
  phonetics: Phonetic[] = [];
  baseSenses: BaseSense[] = [];
  examples: Example[] = [];
  stories: Story[] = [];
}
