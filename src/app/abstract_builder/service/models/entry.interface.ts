import {List, Map} from 'immutable';
import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';

type ID = number;

export interface Entry {
  name: string;
  readonly phonetics: List<Phonetic>;
  readonly senses: Map<number, Sense>;
  // sensesOrder: OrderedMap<string, List<number>>;
  // translations: List<Translation>;
  // examples: List<AbstractExample>;
  // stories: List<Story>;
  // senseExampleLinks: List<Map<number, List<number>>>;
  // senseTranslationLinks: List<Map<number, List<number>>>;
  // senseStoryLinks: List<Map<number, List<number>>>;
  // exampleStoryLinks: List<Map<number, List<number>>>;
  // AbstractPhonetic methods
  // addPhonetic(newPhonetic: AbstractPhonetic): List<AbstractPhonetic>;
  // deletePhonetic(index: number): List<AbstractPhonetic>;
  // insertPhonetic(newPhonetic: AbstractPhonetic, index: number): List<AbstractPhonetic>;
  // updatePhonetic(newPhonetic: AbstractPhonetic, index: number): List<AbstractPhonetic>;
  // movePhonetic(from: number, to: number): List<AbstractPhonetic>;
  updatePhonetics(newPhonetics: List<Phonetic>): any;
  // Sense methods
  // getSenseByID(senseID: number): Sense;
  // addSense(newSense: Sense): Map<number, Sense>;
  // deleteSenseByID(senseID: number): Map<number, Sense>;
  // updateSenseByID(newSense: Sense, id: number): Map<number, Sense>;
  updateSenses(newSenses: Map<ID, Sense>): any;
  // Translation methods
  // addTranslation(newTranslation: Translation): List<Translation>;
  // deleteTranslation(index: number): List<Translation>;
  // insertTranslation(newTranslation: Translation, index: number): List<Translation>;
  // updateTranslation(newTranslation: Translation, index: number): List<Translation>;
  // AbstractExample methods
  // addExample(newExample: AbstractExample): List<AbstractExample>;
  // deleteExample(index: number): List<AbstractExample>;
  // insertExample(newExample: AbstractExample, index: number): List<AbstractExample>;
  // updateExample(newExample: AbstractExample, index: number): List<AbstractExample>;
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
  // Change sense-senseTranslation relationship
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
