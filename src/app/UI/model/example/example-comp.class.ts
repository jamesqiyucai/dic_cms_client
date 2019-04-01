import {AbstractExample} from '../base_models/abstract-example.class';
import {List} from 'immutable';
import {StoryComp} from '../story/story-comp.class';

export class ExampleComp extends AbstractExample {
  protected _stories: Array<StoryComp>;
  constructor(id: number, text: string, translations: Array<string>, stories: Array<StoryComp>) {
    super(id, text, translations, stories);
  }

  get stories() {
    return List(this._stories);
  }
}
