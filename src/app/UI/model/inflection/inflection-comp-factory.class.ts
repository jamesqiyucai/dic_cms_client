import {InflectionCompFactory} from './inflection-comp-factory.interface';
import {InflectionComp} from './inflection-comp.class';

export class InflectionCompFactoryImpl implements InflectionCompFactory {
  public createNewInflection(): InflectionComp {
    return new InflectionComp(1, '');
  }
}

