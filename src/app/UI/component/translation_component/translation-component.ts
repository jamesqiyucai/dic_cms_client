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
  private _text: string;
  private _textSubject: BehaviorSubject<string>;
  private _handle: TranslationOrigin;
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
  public get text$() {
    return this._textSubject.asObservable();
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._textSubject.next(this._text);
    }
  }
  public onTextChange(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._textSubject.next(this._text);
    }
  }
  public hasHandle(): boolean {
    return !!this._handle;
  }
}
