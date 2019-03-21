import {AbstractStory} from './abstract-story.class';
import {BuilderComponentModelTypes} from './model-types.enum';
import {Storable} from './storable.class';

export abstract class AbstractExample extends Storable {
  protected constructor(
    id: number,
    text: string,
    translations: Array<string>,
    stories: Array<AbstractStory>,
    protected _source: string,
    protected _location: string
  ) {
    super(id, BuilderComponentModelTypes.example, text, translations, stories);
  }

  get source() {
    return this._source;
  }

  get location() {
    return this._location;
  }

  set source(newSource: string) {
    this._source = newSource;
  }

  set location(newLocation: string) {
    this._location = newLocation;
  }
}
