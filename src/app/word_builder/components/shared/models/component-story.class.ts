import {AbstractStory} from '../../../../UI/abstract_builder/components/models/abstract-story.class';

export class ComponentStory extends AbstractStory {
  constructor(id: number, text: string, title: string) {
    super(id, text, title);
  }
}
