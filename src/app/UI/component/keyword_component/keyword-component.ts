import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ListElementComponent} from '../list_manipulator_component/list-element-component';
import {ProposalKeywordHandle} from '../../../service/proposal/proposal-keyword-handle';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeywordComponent implements ListElementComponent {
  @Input() public editable: boolean = undefined;
  private _handle: ProposalKeywordHandle = {$keyword: new BehaviorSubject(''), keyword: undefined};
  private _index: number;
  private _text: string;
  @Input()
  set handle(newHandle) {
    this._handle = newHandle;
  }
  @Input()
  set index(newIndex) {
    this._index = newIndex;
  }
  get $text() {
    return this._handle.$keyword;
  }
  get text() {
    return this._text;
  }
  set text(newText: string) {
    if (newText !== this._text) {
      this._text = newText;
      this._handle.keyword = newText;
    }
  }
  hasHandle(): boolean {
    return !!this._handle;
  }

}
