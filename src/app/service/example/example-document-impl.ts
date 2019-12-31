import {ExampleDocumentContent} from './example-document-content';
import {ExampleDocument} from './example-document';
import {ExampleTranslationDocument} from './example-translation-document';
import {List} from 'immutable';
import {ExampleSourceDocument} from './example-source-document';

export class ExampleDocumentImpl extends ExampleDocumentContent implements ExampleDocument {
  private _source: ExampleSourceDocument;
  constructor(
    ID: number,
    version: number,
    text: string,
    keywords: string[],
    translations: ExampleTranslationDocument[],
    italics: [number, number][],
    source: ExampleSourceDocument,
    comment: string,
    note: string
  ) {
    super(ID, version, text, keywords, translations, italics, comment, note);
  }
  public get source() {
    return this._source;
  }
  public set source(newSource: ExampleSourceDocument) {
    this._source = newSource;
  }
}
