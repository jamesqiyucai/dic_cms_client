import {ComponentStory} from './component-story.class';

export interface NewComponentStoryFactory {
  createNewStory(): ComponentStory;
}
