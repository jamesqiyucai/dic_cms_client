import {WordBuilderListedSensesComponentModel} from './word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {SenseComp} from '../sense/sense-comp.class';
import {StoryComp} from '../story/story-comp.class';
import {ExampleComp} from '../example/example-comp.class';

export class WordBuilderListedSensesComponentModelImpl implements WordBuilderListedSensesComponentModel {
  private _senses: List<SenseComp>;

  constructor(senses: List<SenseComp>) {
    this._senses = senses;
  }

  public get senses(): List<SenseComp> {
    return this._senses;
  }

  addNewExampleToSense(index: number): void {
  }

  addNewSense(): void {
  }

  addNewStoryToExample(index: number, exampleIndex: number): void {
  }

  addNewStoryToSense(index: number): void {
  }

  deleteExample(id: number): void {
  }

  deleteSense(index: number): void {
  }

  deleteStory(id: number): void {
  }

  modifyExample(id: number, newExample: ExampleComp): void {
  }

  modifySense(index: number, newSense: SenseComp): void {
  }

  modifyStory(id: number, newStory: StoryComp): void {
  }
}
