import {AbstractExample} from '../base_models/abstract-example.class';
import {List} from 'immutable';
import {StoryComp} from '../story/story-comp.class';

export class ExampleComp extends AbstractExample {
  protected _stories: List<StoryComp>;
  constructor(id: number, text: string, translations: List<string>, stories: List<StoryComp>, source: string, location: string) {
    super(id, text, translations, stories, source, location);
  }

  get stories() {
    return this._stories;
  }
}
