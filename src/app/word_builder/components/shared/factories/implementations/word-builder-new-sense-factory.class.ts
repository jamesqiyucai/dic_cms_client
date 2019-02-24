import {NewComponentSenseFactory} from '../new-sense-factory.interface';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';
import {ComponentSense} from '../../models/component-sense.class';
import {NewComponentSensePositionFactory} from '../new-sense-position-factory.interface';
import {List} from 'immutable';
import {Injectable} from '@angular/core';
import {NewComponentExampleFactory} from '../new-example-factory.interface';

@Injectable()
export class WordBuilderNewSenseFactoryImpl extends AbstractWordBuilderFactory implements NewComponentSenseFactory {
  constructor(
    private sensePositionFactory: NewComponentSensePositionFactory,
    private newExampleFactory: NewComponentExampleFactory
    ) {
    super();
  }
  public createNewSense(): ComponentSense {
    const newPosition = this.sensePositionFactory.createNewSensePosition();
    const newExample = this.newExampleFactory.createNewExample();
    const newSense = new ComponentSense(this.id, 1, newPosition, '', '', List(), List(), List([newExample]), List());
    this.incrementID();
    return newSense;
  }
}
