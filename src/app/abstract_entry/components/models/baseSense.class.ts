import {Sense} from './sense.class';
import {SubSense} from './subSense.class';
import {Example} from './example.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class BaseSense extends Sense {
  subSenses: List<SubSense>;
  examples: List<Example>;
  stories: List<Story>;
  constructor(id: number,
              text: string,
              translations: List<string>,
              subSenses: List<SubSense>,
              examples: List<Example>,
              stories: List<Story>
  ) {
    super(id, text, translations);
    this.subSenses = subSenses;
    this.examples = examples;
    this.stories = stories;
  }
}
