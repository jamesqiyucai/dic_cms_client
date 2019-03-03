import {AbstractSenseGroup} from '../../../UI/abstract_builder/components/models/abstract-sense-group.class';
import {ComponentPhonetic} from './component-phonetic.class';
import {ComponentInflection} from './component-inflection.class';
import {ComponentSense} from '../shared/models/component-sense.class';
import {List} from 'immutable';

export class ComponentSenseGroup extends AbstractSenseGroup {
  constructor(
    id: number,
    pos: number,
    phonetics: List<ComponentPhonetic>,
    inflections: List<ComponentInflection>,
    senses: List<ComponentSense>
  ) {
    super(id, pos, phonetics, inflections, senses);
  }
}
