import {ComponentInflection} from '../../component-inflection.class';

export interface NewComponentInflectionFactory {
  createNewInflection(): ComponentInflection;
}
