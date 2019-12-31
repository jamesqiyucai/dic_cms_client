import {ExampleTranslationDocument} from './example-translation-document';
import {ExampleSourceDocument} from './example-source-document';
import {List} from 'immutable';

export abstract class ExampleDocumentContent {
  protected constructor(
    protected _ID: number,
    protected _version: number,
    protected _text: string,
    protected _keywords: string[],
    protected _translations: ExampleTranslationDocument[],
    protected _italics: [number, number][],
    protected _comment: string,
    protected _note: string
  ) {}
  get ID() {
    return this._ID;
  }
  get version() {
    return this._version;
  }
  set version(newVersion: number) {
    this._version = newVersion;
  }
  get text() {
    return this._text;
  }
  set text(newText: string) {
    this._text = newText;
  }
  get keywords() {
    return List(this._keywords);
  }
  set keywords(newKeywords: List<string>) {
    this._keywords = newKeywords.toArray();
  }
  get translations() {
    return List(this.translations);
  }
  set translations(newTranslations: List<ExampleTranslationDocument>) {
    this._translations = newTranslations.toArray();
  }
  get italics() {
    return List(this._italics);
  }
  set italics(newItalics: List<[number, number]>) {
    this._italics = newItalics.toArray();
  }
  get comment() {
    return this._comment;
  }
  set comment(newComment: string) {
    this._comment = newComment;
  }
  get note() {
    return this._note;
  }
  set note(newNote: string) {
    this._note = newNote;
  }
}
