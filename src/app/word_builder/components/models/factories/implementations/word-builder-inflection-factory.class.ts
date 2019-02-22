import {NewComponentInflectionFactory} from '../interfaces/new-inflection-factory.interface';
import {ComponentInflection} from '../../component-inflection.class';

export class NewInflectionFactoryImpl implements NewComponentInflectionFactory {
  public createNewInflection(): ComponentInflection {
    return new ComponentInflection(1, '');
  }
}

