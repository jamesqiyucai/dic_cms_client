import {List, OrderedMap} from 'immutable';
import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';

export interface Entry {
  name: string;
  pos: number;
  phonetics: List<Phonetic>;
  senses: OrderedMap<string, Sense>;
  // sensesOrder: OrderedMap<string, List<number>>;
  // translations: List<Translation>;
  // examples: List<Example>;
  // stories: List<Story>;
  // senseExampleLinks: List<Map<number, List<number>>>;
  // senseTranslationLinks: List<Map<number, List<number>>>;
  // senseStoryLinks: List<Map<number, List<number>>>;
  // exampleStoryLinks: List<Map<number, List<number>>>;
  // Phonetic methods
  addPhonetic(newPhonetic: Phonetic): List<Phonetic>;
  deletePhonetic(index: number): List<Phonetic>;
  insertPhonetic(newPhonetic: Phonetic, index: number): List<Phonetic>;
  updatePhonetic(newPhonetic: Phonetic, index: number): List<Phonetic>;
  movePhonetic(from: number, to: number): List<Phonetic>;
  // Sense methods
  getSenseByID(senseID: number): Sense;
  addSense(newSense: Sense): OrderedMap<string, Sense>;
  deleteSenseByID(senseID: number): OrderedMap<string, Sense>;
  updateSenseByID(newSense: Sense, ID: number): OrderedMap<string, Sense>;
  // Translation methods
  // addTranslation(newTranslation: Translation): List<Translation>;
  // deleteTranslation(index: number): List<Translation>;
  // insertTranslation(newTranslation: Translation, index: number): List<Translation>;
  // updateTranslation(newTranslation: Translation, index: number): List<Translation>;
  // Example methods
  // addExample(newExample: Example): List<Example>;
  // deleteExample(index: number): List<Example>;
  // insertExample(newExample: Example, index: number): List<Example>;
  // updateExample(newExample: Example, index: number): List<Example>;
  // Story methods
  // addStory(newStory: Story): List<Story>;
  // deleteStory(index: number): List<Story>;
  // insertStory(newStory: Story, index: number): List<Story>;
  // updateStory(newStory: Story, index: number): List<Story>;
  // Change sense-example relationship
  // changeExampleOrderISense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  // deleteExampleInSense(senseID: number, exampleID: number): List<Map<number, List<number>>>;
  // moveExampleToAnotherSense(
  //   currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  // ): List<Map<number, List<number>>>;
  // Change sense-translation relationship
  // changeTranslationOrderInSense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  // deleteTranslationInSense(senseID: number, translationID: number): List<Map<number, List<number>>>;
  // moveTranslationToAnotherSense(
  //   currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  // ): List<Map<number, List<number>>>;
  // Change sense-story relationship
  // changeStoryOrderInSense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  // deleteStoryInSense(senseID: number, storyID: number): List<Map<number, List<number>>>;
  // moveStoryToAnotherSense(
  //   currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  // ): List<Map<number, List<number>>>;
  // Change sense-example relationship
  // changeExampleOrderInSense(senseID: number, from: number, to: number): List<Map<number, List<number>>>;
  // deleteExampleInSense(senseID: number, exampleID: number): List<Map<number, List<number>>>;
  // moveExampleToAnotherSense(
  //   currentSenseID: number, targetSenseID: number, currentIndex: number, newIndex: number
  // ): List<Map<number, List<number>>>;
}
