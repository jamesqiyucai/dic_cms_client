import {AbstractSense} from '../abstract-sense.class';
import {List} from 'immutable';
import {AbstractStory} from '../abstract-story.class';
import {AbstractExample} from '../abstract-example.class';
import {AbstractSensePosition} from '../abstract-sense-position.class';

export interface AbstractSenseFactory {
  getSense(
    id: number,
    position: AbstractSensePosition,
    pos: number,
    text: string,
    summary: string,
    tags: List<number>,
    translations: List<string>,
    stories: List<AbstractStory>,
    examples: List<AbstractExample>
  ): AbstractSense;
  getSense(id: number, position: AbstractSensePosition): AbstractSense;
}
