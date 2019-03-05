import {NewListedSensesComponentModelComposer} from './model-composer.interface';
import {WordBuilderListedSensesComponentModel} from './word-builder-listed-senses-component-model.interface';
import {List} from 'immutable';
import {SenseComp} from '../sense/sense-comp.class';
import {Injectable} from '@angular/core';
import {SenseCompFactory} from '../sense/sense-comp-factory.interface';
import {WordBuilderListedSensesComponentModelImpl} from './word-builder-listed-senses-component-model.class';

@Injectable()
export class NewListedSensesComponentModelComposerImpl implements NewListedSensesComponentModelComposer {
  private data: List<SenseComp> = List([this.newSenseFactory.createNewSense()]);

  constructor(
    private newSenseFactory: SenseCompFactory
  ) {}

  public createNewModel(): WordBuilderListedSensesComponentModel {
    return new WordBuilderListedSensesComponentModelImpl(this.data);
  }
}
