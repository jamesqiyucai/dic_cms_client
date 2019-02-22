import {NewListedSensesComponentModelComposer} from '../interfaces/new-component-model-composer.interface';
import {WordBuilderListedSensesComponentModel} from '../../listed-senses/word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {ComponentSense} from '../../component-sense.class';
import {Injectable} from '@angular/core';
import {NewComponentSenseFactory} from '../interfaces/new-sense-factory.interface';
import {WordBuilderListedSensesComponentModelImpl} from '../../listed-senses/word-builder-listed-senses-component-model.class';

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
