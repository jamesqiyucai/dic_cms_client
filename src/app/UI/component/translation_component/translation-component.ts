import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {TranslationOrigin} from './translation-origin';
import {ListElementComponent} from '../list_manipulator_component/list-element-component';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-translation',
  templateUrl: './translation-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationComponent implements ListElementComponent {
  private _text: string = undefined;
  private _ID: number = undefined;
  private _handle: TranslationOrigin = {$text: new BehaviorSubject(''), ID: undefined, $ID: undefined, text: undefined};
  @Input() index: number;
  @Input()
  set handle(newHandle: TranslationOrigin) {
    this._handle = newHandle;
  }
  @Input() editable: boolean = undefined;
  // ngOnChanges(): void {
  //   this.handle.$text.subscribe(text => this._text = text);
  //   this.handle.$ID.subscribe(ID => this.ID = ID);
  // }
  public get $text() {
    return this._handle.$text;
  }
  public get text() {
    return this._text;
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._handle.text = newText;
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
  public hasHandle(): boolean {
    return !!this._handle;
  }
}
