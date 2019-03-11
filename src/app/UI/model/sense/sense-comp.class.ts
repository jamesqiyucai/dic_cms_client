import {AbstractSense} from '../base_models/abstract-sense.class';
import {SensePositionComp} from '../sense-position/sense-position-comp.class';
import {List} from 'immutable';
import {ExampleComp} from '../example/example-comp.class';
import {StoryComp} from '../story/story-comp.class';

export class SenseComp extends AbstractSense {
  protected _examples: List<ExampleComp>;
  protected _stories: List<StoryComp>;
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
  ) {
    super(id, text, translations, stories, examples, pos, position, summary, tags);
  }

  get examples() {
    return this._examples;
  }

  get stories() {
    return this._stories;
  }
}
