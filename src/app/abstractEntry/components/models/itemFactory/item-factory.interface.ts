import {Story} from '../story.class';
import {Example} from '../example.class';
import {Phonetic} from '../phonetic.class';
import {SubSense} from '../subSense.class';
import {BaseSense} from '../baseSense.class';
import {SenseGroup} from '../sense-group.class';
import {List} from 'immutable';

export interface ItemFactory {
  getPhonetic(): Phonetic;
  getPhonetic(region: number, symbol: string): Phonetic;
  getExample(id: number): Example;
  getExample(id: number, text: string, translations: List<string>, source: string, location: string, stories: List<Story>): Example;
  getStory(id: number): Story;
  getStory(id: number, summary: string, text: string): Story;
  getBaseSense(
    id: number,
    text: string,
    translations: List<string>,
    subSenses: List<SubSense>,
    examples: List<Example>,
    stories: List<Story>): BaseSense;
  getBaseSense(id: number): BaseSense;
  getSubSense(
    id: number,
    summary: string,
    text: string,
    translations: List<string>,
    tags: List<number>,
    examples: List<Example>,
    stories: List<Story>
      ): SubSense;
  getSubSense(id: number): SubSense;
  getSenseGroup(id: number): SenseGroup;
  getSenseGroup(id: number, pos: number, phonetics: List<Phonetic>, baseSenses: List<BaseSense>, examples: Example[], stories: Story[]): SenseGroup;
}
