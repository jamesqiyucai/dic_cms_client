import {WordBuilderStory} from '../word-builder-story.class';
import {WordBuilderExample} from '../word-builder-example.class';
import {WordBuilderSense} from '../word-builder-sense.class';
import {List} from 'immutable';

export interface WordBuilderListedSensesComponentModel {
  senses: List<WordBuilderSense>;

  addNewStoryToExample(index: number, exampleIndex: number): void;
  addNewStoryToSense(index: number): void;
  modifyStory(id: number, newStory: WordBuilderStory): void;
  deleteStory(id: number): void;

  addNewExampleToSense(index: number): void;
  modifyExample(id: number, newExample: WordBuilderExample): void;
  deleteExample(id: number): void;

  addNewSense(): void;
  modifySense(index: number, newSense: WordBuilderSense): void;
  deleteSense(index: number): void;
}
