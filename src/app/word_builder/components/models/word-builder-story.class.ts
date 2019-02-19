import {AbstractStory} from '../../../abstract_builder/components/models/abstract-story.class';

export class WordBuilderStory extends AbstractStory {
  constructor(id: number, text: string, title: string) {
    super(id, text, title);
  }
}
