import {List} from 'immutable';
import {BehaviorSubject} from 'rxjs';

export abstract class ExampleDocumentContent {
  protected _ID: number;
  protected _version: number;
  protected _text: string;
  protected _italics: [number, number][];
  protected _comment: string;
  protected _note: string;
  public readonly $ID: BehaviorSubject<number>;
  public readonly $text: BehaviorSubject<string>;
  public readonly $italics: BehaviorSubject<List<[number, number]>>;
  public readonly $note: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  public readonly $comment: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  protected constructor() {
    this.$ID = new BehaviorSubject<number>(undefined);
    this.$text = new BehaviorSubject<string>('');
    this.$italics = new BehaviorSubject<List<[number, number]>>(List());
    this.$note = new BehaviorSubject<string>('');
    this.$comment = new BehaviorSubject<string>('');
    this._ID = undefined;
    this._version = undefined;
    this._text = '';
    this._italics = [];
    this._comment = '';
    this._note = '';
  }
  public set ID(newID: number) {
    if (this._ID !== newID) {
      this._ID = newID;
      this.$ID.next(newID);
    }
  }
  set version(newVersion: number) {
    this._version = newVersion;
  }
  set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this.$text.next(newText);
    }
  }
  set italics(newItalics: List<[number, number]>) {
    if (!newItalics.equals(List(this._italics))) {
      this._italics = newItalics.toArray();
      this.$italics.next(newItalics);
    }
  }
  set comment(newComment: string) {
    if (this._comment !== newComment) {
      this._comment = newComment;
      this.$comment.next(newComment);
    }
  }
  set note(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this.$note.next(newNote);
    }
  }
}
