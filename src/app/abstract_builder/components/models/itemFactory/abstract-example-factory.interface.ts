import {AbstractExample} from '../abstract-example.class';
import {List} from 'immutable';
import {AbstractStory} from '../abstract-story.class';

export interface AbstractExampleFactory {
  getExample(
    id: number,
    text: string,
    translations: List<string>,
    stories: List<AbstractStory>,
    source: string,
    location: string
  ): AbstractExample;
  getExample(id: number): AbstractExample;
}
