import {WordBuilderInflection} from '../../word-builder-inflection.class';

export interface WordBuilderNewInflectionFactory {
  createNewInflection(): WordBuilderInflection;
}
