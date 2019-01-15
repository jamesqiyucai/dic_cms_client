import {Item} from './item.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class Example extends Item {
  text: string;
  translations: List<string>;
  source: string;
  location: string;
  stories: List<Story>;
  constructor(
    id: number,
    text: string,
    translations: List<string>,
    source: string,
    location: string,
    stories: List<Story>
  ) {
    super(id);
    this.type = 'EXAMPLE';
    this.text = text;
    this.translations = translations;
    this.source = source;
    this.location = location;
    this.stories = stories;
  }
}
