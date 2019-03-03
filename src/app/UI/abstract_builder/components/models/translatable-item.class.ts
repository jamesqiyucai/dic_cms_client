import {List} from 'immutable';
import {TextedItem} from './texted-item.class';
import {changeElementOrder} from '../../../../../utils/changeElementOrder.function';

export abstract class TranslatableItem extends TextedItem {
  protected constructor(
    id: number,
    type: string,
    text: string,
    protected _translations: List<String>
  ) {
    super(id, type, text);
  }

  get translations() {
    return this._translations;
  }

  public addTranslation(newTranslation: string) {
    this._translations = this._translations.push(newTranslation);
  }
  public changeTranslationsOrder(from: number, to: number) {
    this._translations = changeElementOrder(this._translations, from, to);
  }
  public deleteTranslation(index: number) {
    this._translations = this._translations.delete(index);
  }
}
