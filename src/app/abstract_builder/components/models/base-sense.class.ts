import {Sense} from './sense.class';
import {SubSense} from './sub-sense.class';
import {Example} from './example.class';
import {Story} from './story.class';
import {List} from 'immutable';

export class BaseSense extends Sense {
  private _subSenses: List<SubSense>;
  private _examples: List<Example>;
  private _stories: List<Story>;
  constructor(
    id: number,
    text: string,
    translations: List<string>,
    subSenses: List<SubSense>,
    examples: List<Example>,
    stories: List<Story>
  ) {
    super(id, text, translations);
    this._type = 'BASESENSE';
    this._subSenses = subSenses;
    this._examples = examples;
    this._stories = stories;
  }
}
