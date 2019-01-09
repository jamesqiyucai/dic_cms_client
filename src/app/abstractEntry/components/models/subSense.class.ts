import {Sense} from './sense.class';
import {Example} from './example.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class SubSense extends Sense {
  summary: string;
  tags: List<number>;
  examples: List<Example>;
  stories: List<Story>;
  constructor(
    id: number,
    text: string,
    translations: List<string>,
    summary: string,
    tags: List<number>,
    examples: List<Example>,
    stories: List<Story>
  ) {
    super(id, text, translations);
    this.summary = summary;
    this.tags = tags;
    this.examples = examples;
    this.stories = stories;
  }
}
