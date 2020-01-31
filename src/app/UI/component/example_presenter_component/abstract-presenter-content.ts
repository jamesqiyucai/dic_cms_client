import {italicizeText} from '../example_proposal_editor_component/italicize-text';
import {List} from 'immutable';
import {ExampleHandle} from '../../../service/example';
import {map} from 'rxjs/operators';

export abstract class AbstractPresenterContent {
  protected _handle: ExampleHandle;
  protected _text: string;
  protected _comment: string;
  protected _note: string;
  protected _italics: [number, number][];
  get $text() {
    return this._handle.$text;
  }
  set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._handle.text = newText;
    }
  }
  get $comment() {
    return this._handle.$comment;
  }
  set comment(newComment: string) {
    if (this._comment !== newComment) {
      this._comment = newComment;
      this._handle.comment = newComment;
    }
  }
  get $note() {
    return this._handle.$note;
  }
  set note(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this._handle.note = newNote;
    }
  }
  get $italicizedText() {
    return this.$text.pipe(
      map(text => italicizeText(text, this._italics))
    );
    // return italicizeText(this.text, this.italics.toArray());
  }
  get italics() {
    return List(this._italics);
  }
  set italics(newItalics: List<[number, number]>) {
    if (!newItalics.equals(List(this._italics))) {
      this._italics = newItalics.toArray();
      this._handle.italics = newItalics;
    }
  }
}
