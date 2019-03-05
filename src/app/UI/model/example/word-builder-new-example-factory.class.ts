import {NewComponentExampleFactory} from './new-example-factory.interface';
import {ComponentExample} from './component-example.class';
import {List} from 'immutable';
import {AbstractWordBuilderFactory} from '../../../word_builder/components/shared/factories/implementations/abstract-word-builder-factory.class';

export class NewComponentExampleFactoryImpl extends AbstractWordBuilderFactory implements NewComponentExampleFactory {
  public createNewExample(): ComponentExample {
    const newExample = new ComponentExample(this.id, '', List(), List(), '', '');
    this.incrementID();
    return newExample;
  }
}
