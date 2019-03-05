import {AbstractStory} from '../base_models/abstract-story.class';

export class StoryComp extends AbstractStory {
  constructor(id: number, text: string, title: string) {
    super(id, text, title);
  }
}
