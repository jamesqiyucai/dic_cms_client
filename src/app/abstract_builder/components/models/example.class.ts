import {Item} from './item.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class Example extends Item {
  private _text: string;
  private _translations: List<string>;
  private _source: string;
  private _location: string;
  private _stories: List<Story>;
  constructor(
    id: number,
    text: string,
    translations: List<string>,
    source: string,
    location: string,
    stories: List<Story>
  ) {
    super(id);
    this._type = 'EXAMPLE';
    this._text = text;
    this._translations = translations;
    this._source = source;
    this._location = location;
    this._stories = stories;
  }
}
