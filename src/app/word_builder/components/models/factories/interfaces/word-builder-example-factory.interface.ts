import {AbstractExampleFactory} from '../../../../../abstract_builder/components/models/itemFactory/abstract-example-factory.interface';
import {List} from 'immutable';
import {WordBuilderStory} from '../../word-builder-story.class';
import {WordBuilderExample} from '../../word-builder-example.class';

export interface WordBuilderExampleFactory extends AbstractExampleFactory {
  getExample(
    id: number,
    text: string,
    translations: List<string>,
    stories: List<WordBuilderStory>,
    source: string,
    location: string
  ): WordBuilderExample;
  getExample(id: number): WordBuilderExample;
}
