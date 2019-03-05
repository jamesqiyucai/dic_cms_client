import {NewComponentPhoneticFactory} from './new-phonetic-factory.interface';
import {ComponentPhonetic} from '../../../word_builder/components/grouped_senses/component-phonetic.class';

export class WordBuilderPhoneticFactoryImpl implements NewComponentPhoneticFactory {
  public createNewPhonetic(): ComponentPhonetic {
    return new ComponentPhonetic(1, '');
  }
}
