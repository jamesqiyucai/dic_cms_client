import {WordBuilderPhonetic} from '../../word-builder-phonetic.class';

export interface WordBuilderNewPhoneticFactory {
  createNewPhonetic(): WordBuilderPhonetic;
}
