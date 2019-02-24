import {ComponentPhonetic} from '../../grouped_senses/component-phonetic.class';

export interface NewComponentPhoneticFactory {
  createNewPhonetic(): ComponentPhonetic;
}
