import {NewComponentInflectionFactory} from './new-inflection-factory.interface';
import {ComponentInflection} from '../../../word_builder/components/grouped_senses/component-inflection.class';

export class NewInflectionFactoryImpl implements NewComponentInflectionFactory {
  public createNewInflection(): ComponentInflection {
    return new ComponentInflection(1, '');
  }
}

