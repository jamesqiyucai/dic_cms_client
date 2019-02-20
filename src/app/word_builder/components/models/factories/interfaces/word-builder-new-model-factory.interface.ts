import {WordBuilderListedSensesModel} from '../../listed-senses/word-builder-listed-senses-model.interface';

export interface WordBuilderNewModelFactory {
  createNewModel(): WordBuilderListedSensesModel;
}
