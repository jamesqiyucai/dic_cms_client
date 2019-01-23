import {Sense} from './sense.class';
import {Example} from './example.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class SubSense extends Sense {
  _summary: string;
  _tags: List<number>;
  _examples: List<Example>;
  _stories: List<Story>;
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
    this._type = 'SUBSENSE';
    this._summary = summary;
    this._tags = tags;
    this._examples = examples;
    this._stories = stories;
  }
}
