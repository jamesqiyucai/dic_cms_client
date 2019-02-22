import {AbstractExample} from '../../../abstract_builder/components/models/abstract-example.class';
import {List} from 'immutable';
import {ComponentStory} from './component-story.class';

export class ComponentExample extends AbstractExample {
  constructor(id: number, text: string, translations: List<string>, stories: List<ComponentStory>, source: string, location: string) {
    super(id, text, translations, stories, source, location);
  }
}
