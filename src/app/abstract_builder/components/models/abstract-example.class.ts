import {AbstractStory} from './abstract-story.class';
import {List} from 'immutable';
import {BuilderComponentModelTypes} from './model-types.enum';
import {TranslatableItem} from './translatable-item.class';
import {ElaboratedItem} from './elaborated-item.class';

export abstract class AbstractExample extends ElaboratedItem {
  protected constructor(
    id: number,
    text: string,
    translations: List<string>,
    stories: List<AbstractStory>,
    protected _source: string,
    protected _location: string
  ) {
    super(id, BuilderComponentModelTypes.example, text, translations, stories);
  }

  get source() {
    return this._source;
  }
  get location() {
    return this.location;
  }
  set source(newSource: string) {
    this._source = newSource;
  }
  set location(newLocation: string) {
    this._location = newLocation;
  }

}
