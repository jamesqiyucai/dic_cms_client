import {AbstractPhonetic} from '../abstract-phonetic.class';
import {List} from 'immutable';
import {AbstractInflection} from '../abstract-inflection.class';
import {AbstractSense} from '../abstract-sense.class';
import {AbstractSenseGroup} from '../abstract-sense-group.class';

export interface AbstractSenseGroupFactory {
  getSenseGroup(
    id: number,
    pos: number,
    phonetics: List<AbstractPhonetic>,
    inflections: List<AbstractInflection>,
    senses: List<AbstractSense>
  ): AbstractSenseGroup;
}
