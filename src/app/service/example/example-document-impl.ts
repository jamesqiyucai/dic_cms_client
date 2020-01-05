import {ExampleDocumentContent} from './example-document-content';
import {ExampleDocument} from './example-document';
import {ExampleTranslationDocument} from './example-translation-document';
import {ExampleSourceDocument} from './example-source-document';
import {Subject} from 'rxjs';
import {ExampleSourceHandle} from './example-source-handle';

export class ExampleDocumentImpl extends ExampleDocumentContent implements ExampleDocument {
  private _source: ExampleSourceDocument;
  private _$source = new Subject<ExampleSourceHandle>();
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
  public get $source() {
    return this._$source;
  }
  public set source(newSource: ExampleSourceDocument) {
    this._source = newSource;
  }
}
