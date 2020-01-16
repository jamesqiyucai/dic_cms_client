import {ExampleDocumentContent} from './example-document-content';
import {ExampleDocument} from './example-document';
import {ExampleTranslationDocument} from './example-translation-document';
import {ExampleSourceDocument} from './example-source-document';
import {BehaviorSubject} from 'rxjs';
import {ExampleSourceHandle} from './example-source-handle';
import {ExampleKeywordHandle} from './example-keyword-handle';
import {List} from 'immutable';
import {ExampleTranslationHandle} from './example-translation-handle';
import {ExampleKeywordDocument} from './example-keyword-document';

export class ExampleDocumentImpl extends ExampleDocumentContent implements ExampleDocument {
  private _source: ExampleSourceDocument;
  private _keywords: ExampleKeywordDocument[];
  private _translations: ExampleTranslationDocument[];
  public readonly $source = new BehaviorSubject<ExampleSourceHandle>(undefined);
  public readonly $keywords = new BehaviorSubject<List<ExampleKeywordDocument>>(List());
  public readonly $translations = new BehaviorSubject<List<ExampleTranslationDocument>>(List());
  constructor() {
    super();
  }
  public set keywords(newKeywords: List<ExampleKeywordHandle>) {
    if (!newKeywords.equals(List(this._keywords))) {
      this._keywords = newKeywords.toArray();
      this.$keywords.next(newKeywords);
    }
  }
  public set translations(newTranslations: List<ExampleTranslationHandle>) {
    if (!newTranslations.equals(List(this._translations))) {
      this._translations = newTranslations.toArray();
      this.$translations.next(newTranslations);
    }
  }
  public get source() {
    return this._source;
  }
  public set source(newSource: ExampleSourceDocument) {
    this._source = newSource;
  }
}
