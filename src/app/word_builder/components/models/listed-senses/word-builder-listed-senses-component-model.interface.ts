import {ComponentStory} from '../component-story.class';
import {ComponentExample} from '../component-example.class';
import {ComponentSense} from '../component-sense.class';
import {List} from 'immutable';

export interface WordBuilderListedSensesComponentModel {
  senses: List<ComponentSense>;

  addNewStoryToExample(index: number, exampleIndex: number): void;
  addNewStoryToSense(index: number): void;
  modifyStory(id: number, newStory: ComponentStory): void;
  deleteStory(id: number): void;

  addNewExampleToSense(index: number): void;
  modifyExample(id: number, newExample: ComponentExample): void;
  deleteExample(id: number): void;

  addNewSense(): void;
  modifySense(index: number, newSense: ComponentSense): void;
  deleteSense(index: number): void;
}
