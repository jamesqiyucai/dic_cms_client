import {Sense} from './sense.class';
import {Example} from './example.class';
import {Story} from './story.class';

export class SubSense extends Sense {
  summary: string;
  tags: number[];
  examples: Example[];
  stories: Story[];
  constructor(id: number, text: string, translations: string[], summary: string, tags: number[], examples: Example[], stories: Story[]) {
    super(id, text, translations);
    this.summary = summary;
    this.tags = tags;
    this.examples = examples;
    this.stories = stories;
  }
}
