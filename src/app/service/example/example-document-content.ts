import {ExampleTranslationDocument} from './example-translation-document';
import {ExampleSourceDocument} from './example-source-document';
import {List} from 'immutable';
import {Subject} from "rxjs";
import {ExampleTranslationHandle} from "./example-translation-handle";
import {ExampleSourceHandle} from "./example-source-handle";

export abstract class ExampleDocumentContent {
  private _$ID = new Subject<number>();
  private _$text = new Subject<string>();
  private _$keywords = new Subject<List<string>>();
  private _$italics = new Subject<List<[number, number]>>();
  private _$translations = new Subject<List<ExampleTranslationHandle>>();
  private _$note = new Subject<string>();
  private _$comment = new Subject<string>();
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
  get $ID() {
    return this._$ID;
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
  get $text() {
    return this._$text;
  }
  set text(newText: string) {
    this._text = newText;
    this._$text.next(newText);
  }
  get keywords() {
    return List(this._keywords);
  }
  get $keywords() {
    return this._$keywords;
  }
  set keywords(newKeywords: List<string>) {
    this._keywords = newKeywords.toArray();
    this._$keywords.next(newKeywords);
  }
  get translations() {
    return List(this._translations);
  }
  get $translations() {
    return this._$translations;
  }
  set translations(newTranslations: List<ExampleTranslationDocument>) {
    this._translations = newTranslations.toArray();
    this._$translations.next(newTranslations);
  }
  get italics() {
    return List(this._italics);
  }
  get $italics() {
    return this._$italics;
  }
  set italics(newItalics: List<[number, number]>) {
    this._italics = newItalics.toArray();
    this._$italics.next(newItalics);
  }
  get comment() {
    return this._comment;
  }
  get $comment() {
    return this._$comment;
  }
  set comment(newComment: string) {
    this._comment = newComment;
    this._$comment.next(newComment);
  }
  get note() {
    return this._note;
  }
  get $note() {
    return this._$note;
  }
  set note(newNote: string) {
    this._note = newNote;
    this._$note.next(newNote);
  }
}
