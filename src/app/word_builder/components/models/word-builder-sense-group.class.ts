import {AbstractSenseGroup} from '../../../abstract_builder/components/models/abstract-sense-group.class';
import {WordBuilderPhonetic} from './word-builder-phonetic.class';
import {WordBuilderInflection} from './word-builder-inflection.class';
import {WordBuilderSense} from './word-builder-sense.class';
import {List} from 'immutable';

export class WordBuilderSenseGroup extends AbstractSenseGroup {
  constructor(
    id: number,
    pos: number,
    phonetics: List<WordBuilderPhonetic>,
    inflections: List<WordBuilderInflection>,
    senses: List<WordBuilderSense>
  ) {
    super(id, pos, phonetics, inflections, senses);
  }
}
