import {AbstractExample} from '../base_models/abstract-example.class';
import {List} from 'immutable';
import {StoryComp} from '../story/story-comp.class';

export class ExampleComp extends AbstractExample {
  protected _stories: Array<StoryComp>;
  constructor(
    id: number,
    protected _version: number,
    text: string,
    translations: Array<string>,
    stories: Array<StoryComp>
  ) {
    super(null, text, translations, stories);
    this._version = null;
  }

  get version() {
    return this._version;
  }

  get stories() {
    return List(this._stories);
  }
}
