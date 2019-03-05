import {AbstractInflection} from '../base_models/abstract-inflection.class';

export class InflectionComp extends AbstractInflection {
  constructor(type: number, text: string) {
    super(type, text);
  }
}
