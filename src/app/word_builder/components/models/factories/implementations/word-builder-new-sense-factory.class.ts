import {WordBuilderNewSenseFactory} from '../interfaces/word-builder-new-sense-factory.interface';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';
import {WordBuilderSense} from '../../word-builder-sense.class';
import {WordBuilderNewSensePositionFactory} from '../interfaces/word-builder-new-sense-position-factory.interface';
import {List} from 'immutable';
import {Injectable} from '@angular/core';
import {WordBuilderNewExampleFactory} from '../interfaces/word-builder-new-example-factory.interface';

@Injectable()
export class WordBuilderNewSenseFactoryImpl extends AbstractWordBuilderFactory implements WordBuilderNewSenseFactory {
  constructor(
    private sensePositionFactory: WordBuilderNewSensePositionFactory,
    private newExampleFactory: WordBuilderNewExampleFactory
    ) {
    super();
  }
  public createNewSense(): WordBuilderSense {
    const newPosition = this.sensePositionFactory.createNewSensePosition();
    const newExample = this.newExampleFactory.createNewExample();
    const newSense = new WordBuilderSense(this.id, 1, newPosition, '', '', List(), List(), List([newExample]), List());
    this.incrementID();
    return newSense;
  }
}
