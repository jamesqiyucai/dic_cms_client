import {ElaboratedItem} from './elaborated-item.class';
import {List} from 'immutable';
import {AbstractStory} from './abstract-story.class';
import {AbstractExample} from './abstract-example.class';
import {changeElementOrder} from '../../../../../utils/changeElementOrder.function';

export abstract class ExemplifiedItem extends ElaboratedItem {
  protected constructor(
    id: number,
    type: string,
    text: string,
    translations: List<string>,
    stories: List<AbstractStory>,
    protected _examples: List<AbstractExample>
  ) {
    super(id, type, text, translations, stories);
  }

  get examples() {
    return this._examples;
  }

  /** Methods to change examples */
  public addExample(newExample: AbstractExample) {
    this._examples = this._examples.push(newExample);
  }
  public deleteExample(index: number) {
    this._examples = this._examples.delete(index);
  }
  public changeExamplesOrder(from: number, to: number) {
    this._examples = changeElementOrder(this._examples, from, to);
  }
}
