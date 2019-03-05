import {StoryComp} from '../story/story-comp.class';
import {ExampleComp} from '../example/example-comp.class';
import {SenseComp} from '../sense/sense-comp.class';
import {List} from 'immutable';

export interface WordBuilderListedSensesComponentModel {
  items: List<SenseComp>;

  addNewStoryToExample(index: number, exampleIndex: number): void;
  addNewStoryToSense(index: number): void;
  modifyStory(id: number, newStory: StoryComp): void;
  deleteStory(id: number): void;

  addNewExampleToSense(index: number): void;
  modifyExample(id: number, newExample: ExampleComp): void;
  deleteExample(id: number): void;

  addNewSense(): void;
  modifySense(index: number, newSense: SenseComp): void;
  deleteSense(index: number): void;
}
