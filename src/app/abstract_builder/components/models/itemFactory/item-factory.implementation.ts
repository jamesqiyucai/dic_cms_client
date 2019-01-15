// import {ItemFactory} from './item-factory.interface';
// import {Phonetic} from '../phonetic.class';
// import {Example} from '../example.class';
// import {Story} from '../story.class';
// import {BaseSense} from '../base-sense.class';
// import {SubSense} from '../sub-sense.class';
// import {SenseGroup} from '../sense-group.class';
// import {List} from 'immutable';
//
// export class ItemFactoryImplementation implements ItemFactory {
//   public getPhonetic(): Phonetic;
//   public getPhonetic(id: number, symbol: string): Phonetic;
//   public getPhonetic(id?: number, symbol?: string) {
//     if (id && symbol) {
//       return new Phonetic(id, symbol);
//     } else if (!id && !symbol) {
//       return new Phonetic(1, '');
//     } else {
//       throw new Error('WRONG WAY OF CREATING PHONETIC');
//     }
//   }
//   public getExample(id: number): Example;
//   public getExample(
//     id: number,
//     text: string,
//     translations: List<string>,
//     source: string,
//     location: string,
//     stories: List<Story>
//   ): Example;
//   public getExample(
//     id: number,
//     text?: string,
//     translations?: List<string>,
//     source?: string,
//     location?: string,
//     stories?: List<Story>
//   ) {
//     if (text && translations && source && location && stories) {
//       return new Example(id, text, translations, source, location, stories);
//     } else if (!text && !translations && !source && !location && !stories) {
//       return new Example(id, '', List([]), '', '', List([]));
//     } else {
//       throw new Error('WRONG WAY OF CREATING EXAMPLE');
//     }
//   }
//   public getStory(id: number): Story;
//   public getStory(id: number, summary: string, text: string): Story;
//   public getStory(id: number, summary?: string, text?: string): Story {
//     if (summary && text) {
//       return new Story(id, summary, text);
//     } else if (!summary && !text) {
//       return new Story(id, '', '');
//     } else {
//       throw new Error('WRONG WAY OF CREATING STORY');
//     }
//   }
//   public getBaseSense(id: number): BaseSense;
//   public getBaseSense(
//     id: number,
//     text: string,
//     translations: List<string>,
//     subSenses: List<SubSense>,
//     examples: List<Example>,
//     stories: List<Story>
//   ): BaseSense;
//   public getBaseSense(
//     id: number,
//     text?: string,
//     translations?: List<string>,
//     subSenses?: List<SubSense>,
//     examples?: List<Example>,
//     stories?: List<Story>
//   ): BaseSense {
//     if (text && translations && subSenses && examples && stories && stories) {
//       return new BaseSense(id, text, translations, subSenses, examples, stories);
//     } else if (!(text && translations && subSenses && examples && stories)) {
//       return new BaseSense(id, '', List([]), List([]), List([]), List([]));
//     } else {
//       throw new Error('WRONG WAY OF CREATING BASESENSE');
//     }
//   }
//   public getSubSense(id: number): SubSense;
//   public getSubSense(
//     id: number,
//     summary: string,
//     text: string,
//     translations: List<string>,
//     tags: List<number>,
//     examples: List<Example>,
//     stories: List<Story>
//   ): SubSense;
//   public getSubSense(
//     id: number,
//     summary?: string,
//     text?: string,
//     translations?: List<string>,
//     tags?: List<number>,
//     examples?: List<Example>,
//     stories?: List<Story>
//   ): SubSense {
//     if (summary && text && translations && tags && examples && stories) {
//       return new SubSense(id, text, translations, summary, tags, examples, stories);
//     } else if (!summary && !text && !translations && !tags && !examples && !stories) {
//       return new SubSense(id, '', List([]), '', List([]), List([]), List([]));
//     } else {
//       throw new Error('WRONG WAY OF CREATING SUBSENSE');
//     }
//   }
//   public getSenseGroup(id: number): SenseGroup;
//   public getSenseGroup(
//     id: number,
//     pos: number,
//     phonetics: List<Phonetic>,
//     baseSenses: List<BaseSense>,
//     examples: List<Example>,
//     stories: List<Story>
//   ): SenseGroup;
//   public getSenseGroup(
//     id: number,
//     pos?: number,
//     phonetics?: List<Phonetic>,
//     baseSenses?: List<BaseSense>,
//     examples?: List<Example>,
//     stories?: List<Story>
//   ): SenseGroup {
//     if (pos && phonetics && baseSenses && examples && stories) {
//       return new SenseGroup(id, pos, phonetics, baseSenses, examples, stories);
//     } else if (!pos && !phonetics && !baseSenses && !examples && !stories) {
//       return new SenseGroup(id, 1, List([]), List([]), List([]), List([]));
//     } else {
//       throw new Error('WRONG WAY OF CREATING SENSEGROUP');
//     }
//   }
// }
