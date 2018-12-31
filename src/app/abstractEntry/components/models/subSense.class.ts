import {Sense} from './sense.class';
import {Example} from './example.class';
import {Story} from './story.class';

export class SubSense extends Sense {
  summary = '';
  tags: number[] = [];
  examples: Example[] = [];
  stories: Story[] = [];
}
