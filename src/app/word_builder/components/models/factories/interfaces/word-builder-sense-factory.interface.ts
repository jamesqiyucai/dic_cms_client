import {AbstractSenseFactory} from '../../../../../abstract_builder/components/models/itemFactory/abstract-sense-factory.interface';
import {List} from 'immutable';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {WordBuilderStory} from '../../word-builder-story.class';
import {WordBuilderExample} from '../../word-builder-example.class';
import {WordBuilderSensePosition} from '../../word-builder-sense-position.class';

export interface WordBuilderSenseFactory extends AbstractSenseFactory {
  getSense(
    id: number,
    position: WordBuilderSensePosition,
    pos: number,
    text: string,
    summary: string,
    tags: List<number>,
    translations: List<string>,
    stories: List<WordBuilderStory>,
    examples: List<WordBuilderExample>
  ): WordBuilderSense;
  getSense(id: number, position: WordBuilderSensePosition): WordBuilderSense;
}
