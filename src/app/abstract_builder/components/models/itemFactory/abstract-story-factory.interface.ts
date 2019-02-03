import {AbstractStory} from '../abstract-story.class';

export interface AbstractStoryFactory {
  getStory(id: number, text: string, title: string): AbstractStory;
  getStory(id: number): AbstractStory;
}
