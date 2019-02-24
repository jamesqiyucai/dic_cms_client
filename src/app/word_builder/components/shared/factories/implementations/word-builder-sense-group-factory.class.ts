import {SenseGroupFactory} from '../../../grouped_senses/sense-group-factory.interface';
import {ComponentSense} from '../../models/component-sense.class';
import {ComponentInflection} from '../../../grouped_senses/component-inflection.class';
import {ComponentSenseGroup} from '../../../grouped_senses/component-sense-group.class';
import {ComponentPhonetic} from '../../../grouped_senses/component-phonetic.class';
import {List} from 'immutable';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';

export class WordBuilderSenseGroupFactoryImpl extends AbstractWordBuilderFactory implements SenseGroupFactory {
  public getSenseGroup(
    pos: number,
    phonetics: List<ComponentPhonetic>,
    inflections: List<ComponentInflection>,
    senses: List<ComponentSense>
  ): ComponentSenseGroup {
    return new ComponentSenseGroup(this.id, pos, phonetics, inflections, senses);
  }
}
