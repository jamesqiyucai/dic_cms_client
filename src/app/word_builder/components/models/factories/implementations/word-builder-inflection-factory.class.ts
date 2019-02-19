import {WordBuilderNewInflectionFactory} from '../interfaces/word-builder-new-inflection-factory.interface';
import {WordBuilderInflection} from '../../word-builder-inflection.class';

export class WordBuilderInflectionFactoryImpl implements WordBuilderNewInflectionFactory {
  public createNewInflection(): WordBuilderInflection {
    return new WordBuilderInflection(1, '');
  }
}

