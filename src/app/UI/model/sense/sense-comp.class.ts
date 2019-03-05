import {AbstractSense} from '../base_models/abstract-sense.class';
import {SensePositionComp} from '../sense-position/sense-position-comp.class';
import {List} from 'immutable';
import {ExampleComp} from '../example/example-comp.class';
import {StoryComp} from '../story/story-comp.class';
import {ListedSensesItem} from '../listed_senses_item/listed-senses-item.interface';
import {ListedSensesItemImpl} from '../listed_senses_item/listed-senses-item.class';

export class SenseComp extends AbstractSense implements ListedSensesItem {
  constructor(
    id: number,
    pos: number,
    position: SensePositionComp,
    summary: string,
    text: string,
    tags: List<number>,
    translations: List<string>,
    examples: List<ExampleComp>,
    stories: List<StoryComp>,
    readonly isSeparator = false
  ) {
    super(id, text, translations, stories, examples, pos, position, summary, tags);
  }
}
