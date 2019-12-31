import {ExampleTranslationDocument} from './example-translation-document';

export abstract class ExampleTranslationDocumentContent implements ExampleTranslationDocument {
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
    this._text = newText;
  }
}
