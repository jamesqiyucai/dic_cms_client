import {List} from 'immutable';
import {ComponentPhonetic} from './component-phonetic.class';
import {ComponentInflection} from './component-inflection.class';
import {ComponentSense} from '../shared/models/component-sense.class';
import {ComponentSenseGroup} from './component-sense-group.class';

export interface SenseGroupFactory {
  getSenseGroup(
    pos: number,
    phonetics: List<ComponentPhonetic>,
    inflections: List<ComponentInflection>,
    senses: List<ComponentSense>
  ): ComponentSenseGroup;
}
