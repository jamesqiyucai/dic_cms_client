import {WordBuilderListedSensesComponentModel} from './word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {ComponentSense} from '../../shared/models/component-sense.class';
import {ComponentStory} from '../../shared/models/component-story.class';
import {ComponentExample} from '../../shared/models/component-example.class';

export class WordBuilderListedSensesComponentModelImpl implements WordBuilderListedSensesComponentModel {
  private _senses: List<ComponentSense>;

  constructor(senses: List<ComponentSense>) {
    this._senses = senses;
  }

  public get senses(): List<ComponentSense> {
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

  modifyExample(id: number, newExample: ComponentExample): void {
  }

  modifySense(index: number, newSense: ComponentSense): void {
  }

  modifyStory(id: number, newStory: ComponentStory): void {
  }
}
