import {WordBuilderStory} from '../../word-builder-story.class';

export interface WordBuilderNewStoryFactory {
  createNewStory(): WordBuilderStory;
}
