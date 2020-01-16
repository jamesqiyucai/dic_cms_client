import {List} from 'immutable';
import {BehaviorSubject} from 'rxjs';

export abstract class ExampleDocumentContent {
  protected _ID: number = undefined;
  protected _version: number = undefined;
  protected _text: string = undefined;
  protected _italics: [number, number][] = [];
  protected _comment: string = undefined;
  protected _note: string = undefined;
  public readonly $ID = new BehaviorSubject<number>(undefined);
  public readonly $text = new BehaviorSubject<string>(undefined);
  public readonly $italics = new BehaviorSubject<List<[number, number]>>(List());
  public readonly $note = new BehaviorSubject<string>(undefined);
  public readonly $comment = new BehaviorSubject<string>(undefined);
  protected constructor() {}
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
