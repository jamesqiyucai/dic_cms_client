import {ExampleTranslationDocument} from './example-translation-document';
import {Subject} from 'rxjs';

export abstract class ExampleTranslationDocumentContent implements ExampleTranslationDocument {
  public readonly $text = new Subject<string>();
  protected constructor(protected _id: number, protected _text: string) {}
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
    if (this._text !== newText) {
      this._text = newText;
      this.$text.next(newText);
    }
  }
}
