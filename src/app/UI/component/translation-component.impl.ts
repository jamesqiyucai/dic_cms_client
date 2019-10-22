import {AbstractTranslation} from '../../common_entities/abstract-translation';
import {TranslationComponent} from './translation-component';

export class TranslationComponentImpl extends AbstractTranslation implements TranslationComponent {
  get ID() {
    return this._id;
  }
  set ID(newID: number) {
    this._id = newID;
  }
  get text() {
    return this._text;
  }
  set text(newText: string) {
    this._text = newText;
  }
}
