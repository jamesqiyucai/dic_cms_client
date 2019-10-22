import {AbstractTranslation} from '../common_entities/abstract-translation';
import {TranslationService} from './translation-service';

export class TranslationServiceImpl extends AbstractTranslation implements TranslationService {
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
