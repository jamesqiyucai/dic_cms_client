import {ExampleTranslationDocument} from './example-translation-document';
import {BehaviorSubject} from 'rxjs';

export abstract class ExampleTranslationDocumentContent implements ExampleTranslationDocument {
  public readonly $text = new BehaviorSubject<string>(undefined);
  protected _id: number = undefined;
  protected _text: string = undefined;
  protected constructor() {}
  get id() {
    return this._id;
  }
  set id(newID: number) {
    this._id = newID;
  }
  get text() {
    return this._text;
  }
  set text(newText: string) {
    if (
      this._text !== newText) {
      this._text = newText;
      this.$text.next(newText);
    }
  }
}
