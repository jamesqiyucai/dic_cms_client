import {AbstractInflection} from '../abstract-inflection.class';

export interface AbstractInflectionFactory {
  getInflection(type: number, text: string): AbstractInflection;
  getInflection(): AbstractInflection;
}
