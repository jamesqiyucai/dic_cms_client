import {WordBuilderNewStoryFactory} from '../interfaces/word-builder-new-story-factory.interface';
import {WordBuilderStory} from '../../word-builder-story.class';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';

export class WordBuilderStoryFactoryImpl extends AbstractWordBuilderFactory implements WordBuilderNewStoryFactory {
  public createNewStory(): WordBuilderStory {
    const newStory = new WordBuilderStory(this.id, '', '');
    this.incrementID();
    return newStory;
  }
}
