import {Sense} from './sense.class';
import {SubSense} from './subSense.class';
import {Example} from './example.class';
import {Story} from './story.class';

export class BaseSense extends Sense {
  subSenses: SubSense[] = [];
  examples: Example[] = [];
  stories: Story[] = [];
}
