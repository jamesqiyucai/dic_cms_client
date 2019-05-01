import {Textable} from './textable.class';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {List} from 'immutable';

export abstract class Translatable extends Textable {
  protected constructor(
    id: number,
    type: string,
    text: string,
    protected _translations: Array<string>
  ) {
    super(id, type, text);
  }

  get translations() {
    return List(this._translations);
  }

  public addTranslation(atIndex: number, newTranslation: string) {
    this._translations.splice(atIndex, 0, newTranslation);
  }

  public changeTranslationsOrder(from: number, to: number) {
    moveItemInArray(this._translations, from, to);
  }

  public deleteTranslation(index: number) {
    this._translations.splice(index, 1);
  }

  public modifyTranslation(atIndex: number, to: string) {
    this._translations[atIndex] = to;
  }

  public resetTranslations(to: Array<string>) {
    this._translations = to;
  }
}
