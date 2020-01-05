import {Component, Input, OnInit} from '@angular/core';
import {TranslationOrigin} from './translation-origin';

@Component({
  selector: 'app-translation',
  templateUrl: './translation-component.html'
})
export class TranslationComponent implements OnInit {
  private _text: string;
  private _ID: number;
  private _handle: TranslationOrigin;
  @Input()
  set handle(newHandle: TranslationOrigin) {
    this._handle = newHandle;
  }
  @Input() locked: boolean;
  ngOnInit(): void {
    this.handle.$text.subscribe(text => this._text = text);
    this.handle.$ID.subscribe(ID => this.ID = ID);
  }
  public get text() {
    return this._text;
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this.handle.text = newText;
    }
  }
  public get ID() {
    return this._ID;
  }
  public set ID(newID: number) {
    if (this._ID !== newID) {
      this._ID = newID;
      this.handle.ID = newID;
    }
  }
}
