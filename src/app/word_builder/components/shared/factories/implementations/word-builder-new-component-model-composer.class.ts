import {NewListedSensesComponentModelComposer} from '../new-component-model-composer.interface';
import {WordBuilderListedSensesComponentModel} from '../../../listed_senses/model/word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {ComponentSense} from '../../models/component-sense.class';
import {Injectable} from '@angular/core';
import {NewComponentSenseFactory} from '../new-sense-factory.interface';
import {WordBuilderListedSensesComponentModelImpl} from '../../../listed_senses/model/word-builder-listed-senses-component-model.class';

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
