import {ComponentStory} from '../models/component-story.class';

export interface NewComponentStoryFactory {
  createNewStory(): ComponentStory;
}
