import {ComponentInflection} from '../../../word_builder/components/grouped_senses/component-inflection.class';

export interface NewComponentInflectionFactory {
  createNewInflection(): ComponentInflection;
}
