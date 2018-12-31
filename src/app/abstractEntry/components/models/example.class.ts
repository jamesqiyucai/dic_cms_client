import {Item} from './item.class';
import {Story} from './story.class';

export class Example extends Item {
  text: '';
  translations: string[] = [];
  source = '';
  location = '';
  stories: Story[] = [];
}
