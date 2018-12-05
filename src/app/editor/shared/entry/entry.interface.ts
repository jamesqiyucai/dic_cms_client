import {List} from 'immutable';

export interface Entry {
  name: string;
  pos: number;
  phonetics: List<Phonetic>;
  senses: List<Sense>;
  translations: List<Translation>;
  examples: List<Example>;
  stories: List<Story>;
  senseExampleLinks: List<Map<number, List<number>>>;
  senseTranslationLinks: List<Map<number, List<number>>>;
  senseStoryLinks: List<Map<number, List<number>>>;
  exampleStoryLinks: List<Map<number, List<number>>>;
  changeListElementOrder<T>(list: List<T>, from: number, to: number): List<T>;
  // Phonetic methods
  addPhonetic(newPhonetic: Phonetic): List<Phonetic>;
  deletePhonetic(index: number): List<Phonetic>;
  insertPhonetic(newPhonetic: Phonetic, index: number): List<Phonetic>;
  updatePhonetic(newPhonetic: Phonetic, index: number): List<Phonetic>;
  changePhoneticsOrder(from: number, to: number): List<Phonetic>;
  // Sense methods
  addSense(newSense: Sense): List<Sense>;
  deleteSense(index: number): List<Sense>;
  insertSense(newSense: Sense, index: number): List<Sense>;
  updateSense(newSense: Sense, index: number): List<Sense>;
  changeSenseOrder(from: number, to: number): List<Sense>;
  // Translation methods
  addTranslation(newTranslation: Translation): List<Translation>;
  deleteTranslation(index: number): List<Translation>;
  insertTranslation(newTranslation: Translation, index: number): List<Translation>;
  updateTranslation(newTranslation: Translation, index: number): List<Translation>;
  // Example methods
  addExample(newExample: Example): List<Example>;
  deleteExample(index: number): List<Example>;
  insertExample(newExample: Example, index: number): List<Example>;
  updateExample(newExample: Example, index: number): List<Example>;
  // Story methods
  addStory(newStory: Story): List<Story>;
  deleteStory(index: number): List<Story>;
  insertStory(newStory: Story, index: number): List<Story>;
  updateStory(newStory: Story, index: number): List<Story>;
  // Change sense-example relationship
  changeExampleOrderISense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  deleteExampleInSense(senseID: number, exampleID: number): List<Map<number, List<number>>>;
  moveExampleToAnotherSense(
    currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  ): List<Map<number, List<number>>>;
  // Change sense-translation relationship
  changeTranslationOrderInSense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  deleteTranslationInSense(senseID: number, translationID: number): List<Map<number, List<number>>>;
  moveTranslationToAnotherSense(
    currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  ): List<Map<number, List<number>>>;
  // Change sense-story relationship
  changeStoryOrderInSense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  deleteStoryInSense(senseID: number, storyID: number): List<Map<number, List<number>>>;
  moveStoryToAnotherSense(
    currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  ): List<Map<number, List<number>>>;
  // Change sense-example relationship
  changeExampleOrderInSense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  deleteExampleInSense(senseID: number, exampleID: number): List<Map<number, List<number>>>;
  moveExampleToAnotherSense(
    currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  ): List<Map<number, List<number>>>;
}

export interface Phonetic {
  region: number;
  symbol: string;
}

export interface Sense {
  id: number;
  level: number;
  mark: List<number>;
  text: string;
}

export interface Translation {
  id: number;
  text: string;
}

export interface Example {
  sense: number;
  text: string;
  translations: List<string>;
  source: ExampleSource;
}

export interface ExampleSource {
  sourceType: number;
  sourceName: string;
  sourceLocation: string;
}

export interface Story {
  id: number;
  type: number;
  text: string;
}
