import {WordBuilderNewListedSensesComponentModelComposer} from '../interfaces/word-builder-new-component-model-composer.interface';
import {WordBuilderListedSensesComponentModel} from '../../listed-senses/word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {Injectable} from '@angular/core';
import {WordBuilderNewSenseFactory} from '../interfaces/word-builder-new-sense-factory.interface';
import {WordBuilderListedSensesComponentModelImpl} from '../../listed-senses/word-builder-listed-senses-component-model.class';

@Injectable()
export class WordBuilderNewListedSensesComponentModelComposerImpl implements WordBuilderNewListedSensesComponentModelComposer {
  private data: List<WordBuilderSense> = List([this.newSenseFactory.createNewSense()]);

  constructor(
    private newSenseFactory: WordBuilderNewSenseFactory
  ) {}

  public createNewModel(): WordBuilderListedSensesComponentModel {
    return new WordBuilderListedSensesComponentModelImpl(this.data);
  }
}
