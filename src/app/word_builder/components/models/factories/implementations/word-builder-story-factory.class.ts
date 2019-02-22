import {NewComponentStoryFactory} from '../interfaces/new-story-factory.interface';
import {ComponentStory} from '../../component-story.class';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';

export class WordBuilderStoryFactoryImpl extends AbstractWordBuilderFactory implements NewComponentStoryFactory {
  public createNewStory(): ComponentStory {
    const newStory = new ComponentStory(this.id, '', '');
    this.incrementID();
    return newStory;
  }
}
