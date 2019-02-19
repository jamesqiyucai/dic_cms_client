import {AbstractExample} from '../../../abstract_builder/components/models/abstract-example.class';
import {List} from 'immutable';
import {WordBuilderStory} from './word-builder-story.class';

export class WordBuilderExample extends AbstractExample {
  constructor(id: number, text: string, translations: List<string>, stories: List<WordBuilderStory>, source: string, location: string) {
    super(id, text, translations, stories, source, location);
  }
}
