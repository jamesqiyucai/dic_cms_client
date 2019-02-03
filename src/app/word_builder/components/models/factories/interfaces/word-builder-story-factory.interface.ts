import {AbstractStoryFactory} from '../../../../../abstract_builder/components/models/itemFactory/abstract-story-factory.interface';
import {WordBuilderStory} from '../../word-builder-story.class';

export interface WordBuilderStoryFactory extends AbstractStoryFactory {
  getStory(id: number, text: string, title: string): WordBuilderStory;
  getStory(id: number): WordBuilderStory;
}
