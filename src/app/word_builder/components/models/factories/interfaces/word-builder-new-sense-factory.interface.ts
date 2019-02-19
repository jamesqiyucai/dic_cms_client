import {WordBuilderSense} from '../../word-builder-sense.class';

export interface WordBuilderNewSenseFactory {
  createNewSense(): WordBuilderSense;
}
