import {AbstractPhoneticFactory} from '../../../../../abstract_builder/components/models/itemFactory/abstract-phonetic-factory.interface';
import {WordBuilderPhonetic} from '../../word-builder-phonetic.class';

export interface WordBuilderPhoneticFactory extends AbstractPhoneticFactory {
  getPhonetic(region: number, symbol: string): WordBuilderPhonetic;
  getPhonetic(): WordBuilderPhonetic;
}
