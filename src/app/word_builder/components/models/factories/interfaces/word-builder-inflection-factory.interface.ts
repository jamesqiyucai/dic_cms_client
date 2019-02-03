import {
  AbstractInflectionFactory
} from '../../../../../abstract_builder/components/models/itemFactory/abstract-inflection-factory.interface';
import {WordBuilderInflection} from '../../word-builder-inflection.class';

export interface WordBuilderInflectionFactory extends AbstractInflectionFactory {
  getInflection(type: number, text: string): WordBuilderInflection;
  getInflection(): WordBuilderInflection;
}
