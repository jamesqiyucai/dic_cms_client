import {AbstractSense} from '../base_models/abstract-sense.class';
import {ComponentSensePosition} from './component-sense-position.class';
import {List} from 'immutable';
import {ComponentExample} from '../example/component-example.class';
import {ComponentStory} from '../story/component-story.class';

export class ComponentSense extends AbstractSense {
  constructor(
    id: number,
    pos: number,
    position: ComponentSensePosition,
    summary: string,
    text: string,
    tags: List<number>,
    translations: List<string>,
    examples: List<ComponentExample>,
    stories: List<ComponentStory>
  ) {
    super(id, text, translations, stories, examples, pos, position, summary, tags);
  }
}
