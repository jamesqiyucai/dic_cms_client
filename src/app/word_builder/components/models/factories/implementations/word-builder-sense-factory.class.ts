import {WordBuilderNewSenseFactory} from '../interfaces/word-builder-new-sense-factory.interface';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {WordBuilderNewSensePositionFactory} from '../interfaces/word-builder-new-sense-position-factory.interface';
import {List} from 'immutable';

export class WordBuilderSenseFactoryImpl extends AbstractWordBuilderFactory implements WordBuilderNewSenseFactory {
  constructor(private wordBuilderSensePositionFactory: WordBuilderNewSensePositionFactory) {
    super();
  }
  public createNewSense(): WordBuilderSense {
    const newPosition = this.wordBuilderSensePositionFactory.createNewSensePosition();
    const newSense = new WordBuilderSense(this.id, 1, newPosition, '', '', List(), List(), List(), List());
    this.incrementID();
    return newSense;
  }
}
