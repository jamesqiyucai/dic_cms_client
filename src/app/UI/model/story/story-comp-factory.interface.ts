import {StoryComp} from './story-comp.class';

export interface StoryCompFactory {
  createNewStory(): StoryComp;
}
