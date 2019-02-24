import {WordBuilderListedSensesComponentModel} from '../../listed_senses/model/word-builder-listed-senses-component-model.interface';

export interface NewListedSensesComponentModelComposer {
  createNewModel(): WordBuilderListedSensesComponentModel;
}
