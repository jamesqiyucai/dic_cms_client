import {WordBuilderNewExampleFactory} from '../interfaces/word-builder-new-example-factory.interface';
import {WordBuilderExample} from '../../word-builder-example.class';
import {List} from 'immutable';
import {AbstractWordBuilderFactory} from './abstract-word-builder-factory.class';

export class WordBuilderExampleFactoryImpl extends AbstractWordBuilderFactory implements WordBuilderNewExampleFactory {
  public createNewExample(): WordBuilderExample {
    const newExample = new WordBuilderExample(this.id, '', List(), List(), '', '');
    this.incrementID();
    return newExample;
  }
}
