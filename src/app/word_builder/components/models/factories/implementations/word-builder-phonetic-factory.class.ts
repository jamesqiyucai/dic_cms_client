import {NewComponentPhoneticFactory} from '../interfaces/new-phonetic-factory.interface';
import {ComponentPhonetic} from '../../component-phonetic.class';

export class WordBuilderPhoneticFactoryImpl implements NewComponentPhoneticFactory {
  public createNewPhonetic(): ComponentPhonetic {
    return new ComponentPhonetic(1, '');
  }
}
