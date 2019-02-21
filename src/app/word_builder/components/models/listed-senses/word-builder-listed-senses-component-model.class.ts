import {WordBuilderListedSensesComponentModel} from './word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {WordBuilderSense} from '../word-builder-sense.class';
import {WordBuilderStory} from '../word-builder-story.class';
import {WordBuilderExample} from '../word-builder-example.class';

export class WordBuilderListedSensesComponentModelImpl implements WordBuilderListedSensesComponentModel {
  private _senses: List<WordBuilderSense>;

  constructor(senses: List<WordBuilderSense>) {
    this._senses = senses;
  }

  public get senses(): List<WordBuilderSense> {
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

  modifyExample(id: number, newExample: WordBuilderExample): void {
  }

  modifySense(index: number, newSense: WordBuilderSense): void {
  }

  modifyStory(id: number, newStory: WordBuilderStory): void {
  }
}
