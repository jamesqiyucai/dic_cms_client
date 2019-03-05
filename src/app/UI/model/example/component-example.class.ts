import {AbstractExample} from '../base_models/abstract-example.class';
import {List} from 'immutable';
import {ComponentStory} from '../story/component-story.class';

export class ComponentExample extends AbstractExample {
  constructor(id: number, text: string, translations: List<string>, stories: List<ComponentStory>, source: string, location: string) {
    super(id, text, translations, stories, source, location);
  }
}
