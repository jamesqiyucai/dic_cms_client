import {AbstractPhonetic} from '../abstract-phonetic.class';

export interface AbstractPhoneticFactory {
  getPhonetic(region: number, symbol: string): AbstractPhonetic;
  getPhonetic(): AbstractPhonetic;
}
