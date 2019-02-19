import {WordBuilderSenseGroupFactory} from '../interfaces/word-builder-sense-group-factory.interface';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {WordBuilderInflection} from '../../word-builder-inflection.class';
import {WordBuilderSenseGroup} from '../../word-builder-sense-group.class';
import {WordBuilderPhonetic} from '../../word-builder-phonetic.class';
import {List} from 'immutable';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';

export class WordBuilderSenseGroupFactoryImpl extends AbstractWordBuilderFactory implements WordBuilderSenseGroupFactory {
  public getSenseGroup(
    pos: number,
    phonetics: List<WordBuilderPhonetic>,
    inflections: List<WordBuilderInflection>,
    senses: List<WordBuilderSense>
  ): WordBuilderSenseGroup {
    return new WordBuilderSenseGroup(this.id, pos, phonetics, inflections, senses);
  }
}
