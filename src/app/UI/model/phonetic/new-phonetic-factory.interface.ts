import {ComponentPhonetic} from '../../../word_builder/components/grouped_senses/component-phonetic.class';

export interface NewComponentPhoneticFactory {
  createNewPhonetic(): ComponentPhonetic;
}
