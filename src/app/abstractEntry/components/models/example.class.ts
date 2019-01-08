import {Item} from './item.class';
import {Story} from './story.class';

export class Example extends Item {
  text: string;
  translations: string[];
  source: string;
  location: string;
  stories: Story[];
  constructor(id: number, text: string, translations: string[], source: string, location: string, stories: Story[]) {
    super(id);
    this.text = text;
    this.translations = translations;
    this.source = source;
    this.location = location;
    this.stories = stories;
  }
}
