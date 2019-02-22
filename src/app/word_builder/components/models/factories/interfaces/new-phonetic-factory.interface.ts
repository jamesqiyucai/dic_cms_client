import {ComponentPhonetic} from '../../component-phonetic.class';

export interface NewComponentPhoneticFactory {
  createNewPhonetic(): ComponentPhonetic;
}
