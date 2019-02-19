import {WordBuilderStory} from '../word-builder-story.class';
import {WordBuilderExample} from '../word-builder-example.class';
import {WordBuilderSense} from '../word-builder-sense.class';

export interface ListedSensesModel {
  addNewStory(newStory: WordBuilderStory): void;
  modifyStory(id: number, newStory: WordBuilderStory): void;
  deleteStory(id: number): void;
  addNewExample(newExample: WordBuilderExample): void;
  modifyExample(id: number, newExample: WordBuilderExample): void;
  deleteExample(id: number): void;
  addNewSense(): void;
  modifySense(id: number, newSense: WordBuilderSense): void;
  deleteSense(index: number): void;
}
