import {AbstractPhonetic} from '../../../abstract_builder/components/models/abstract-phonetic.class';

export class WordBuilderPhonetic extends AbstractPhonetic {
  constructor(region: number, symbol: string) {
    super(region, symbol);
  }
}
