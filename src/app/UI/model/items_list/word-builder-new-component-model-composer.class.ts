import {NewListedSensesComponentModelComposer} from './new-component-model-composer.interface';
import {WordBuilderListedSensesComponentModel} from './word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {ComponentSense} from '../sense/component-sense.class';
import {Injectable} from '@angular/core';
import {NewComponentSenseFactory} from '../sense/new-sense-factory.interface';
import {WordBuilderListedSensesComponentModelImpl} from './word-builder-listed-senses-component-model.class';

@Injectable()
export class NewListedSensesComponentModelComposerImpl implements NewListedSensesComponentModelComposer {
  private data: List<ComponentSense> = List([this.newSenseFactory.createNewSense()]);

  constructor(
    private newSenseFactory: NewComponentSenseFactory
  ) {}

  public createNewModel(): WordBuilderListedSensesComponentModel {
    return new WordBuilderListedSensesComponentModelImpl(this.data);
  }
}
