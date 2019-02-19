import {AbstractSense} from '../../../abstract_builder/components/models/abstract-sense.class';
import {WordBuilderSensePosition} from './word-builder-sense-position.class';
import {List} from 'immutable';
import {WordBuilderExample} from './word-builder-example.class';
import {WordBuilderStory} from './word-builder-story.class';

export class WordBuilderSense extends AbstractSense {
  constructor(
    id: number,
    pos: number,
    position: WordBuilderSensePosition,
    summary: string,
    text: string,
    tags: List<number>,
    translations: List<string>,
    examples: List<WordBuilderExample>,
    stories: List<WordBuilderStory>
  ) {
    super(id, text, translations, stories, examples, pos, position, summary, tags);
  }
}
