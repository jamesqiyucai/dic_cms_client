import {List} from 'immutable';
import {WordBuilderPhonetic} from '../../word-builder-phonetic.class';
import {WordBuilderInflection} from '../../word-builder-inflection.class';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {WordBuilderSenseGroup} from '../../word-builder-sense-group.class';

export interface WordBuilderSenseGroupFactory {
  getSenseGroup(
    pos: number,
    phonetics: List<WordBuilderPhonetic>,
    inflections: List<WordBuilderInflection>,
    senses: List<WordBuilderSense>
  ): WordBuilderSenseGroup;
}
