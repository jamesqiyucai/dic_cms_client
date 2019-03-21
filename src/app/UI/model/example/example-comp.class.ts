import {AbstractExample} from '../base_models/abstract-example.class';
import {List} from 'immutable';
import {StoryComp} from '../story/story-comp.class';

export class ExampleComp extends AbstractExample {
  protected _stories: Array<StoryComp>;
  constructor(id: number, text: string, translations: Array<string>, stories: Array<StoryComp>, source: string, location: string) {
    super(id, text, translations, stories, source, location);
  }

  get stories() {
    return List(this._stories);
  }
}
