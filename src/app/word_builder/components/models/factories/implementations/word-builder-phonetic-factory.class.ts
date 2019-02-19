import {WordBuilderNewPhoneticFactory} from '../interfaces/word-builder-new-phonetic-factory.interface';
import {WordBuilderPhonetic} from '../../word-builder-phonetic.class';

export class WordBuilderPhoneticFactoryImpl implements WordBuilderNewPhoneticFactory {
  public createNewPhonetic(): WordBuilderPhonetic {
    return new WordBuilderPhonetic(1, '');
  }
}
