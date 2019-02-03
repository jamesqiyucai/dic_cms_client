import {
  AbstractSenseGroupFactory
} from '../../../../../abstract_builder/components/models/itemFactory/abstract-sense-group-factory.interface';
import {List} from 'immutable';
import {WordBuilderPhonetic} from '../../word-builder-phonetic.class';
import {WordBuilderInflection} from '../../word-builder-inflection.class';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {WordBuilderSenseGroup} from '../../word-builder-sense-group.class';

export interface WordBuilderSenseGroupFactory extends AbstractSenseGroupFactory {
  getSenseGroup(
    id: number,
    pos: number,
    phonetics: List<WordBuilderPhonetic>,
    inflections: List<WordBuilderInflection>,
    senses: List<WordBuilderSense>
  ): WordBuilderSenseGroup;
}
