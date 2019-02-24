import {ComponentInflection} from '../../grouped_senses/component-inflection.class';

export interface NewComponentInflectionFactory {
  createNewInflection(): ComponentInflection;
}
