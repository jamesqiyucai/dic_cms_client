import {BehaviorSubject} from 'rxjs';
import {ListElementComponentModel} from '../list_manipulator_component';
import {ProposalKeywordHandle} from '../../../service/proposal/proposal-keyword-handle';

export class ExampleProposalKeywordComponentModel implements ListElementComponentModel<ProposalKeywordHandle> {
  private _editable: boolean;
  private _text: string;
  private _text$: BehaviorSubject<string>;
  private readonly _handle?: ProposalKeywordHandle;
  constructor(handle?: ProposalKeywordHandle) {
    this._editable = true;
    this._text = '';
    this._text$ = new BehaviorSubject<string>('');
    if (handle) {
      this._handle = handle;
    }
  }
  public get editable() {
    return this._editable;
  }
  public set editable(val) {
    this._editable = val;
  }
  public get text$() {
    return this._text$.asObservable();
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this.save();
    }
  }
  public getHandle(): ProposalKeywordHandle {
    if (this._handle) {
      return this._handle;
    } else {
      throw new Error('handle is undefined');
    }
  }
  public save(): void {
    if (this._handle) {
      this._handle.keyword = this._text;
    } else {
      throw new Error('handle is undefined');
    }
  }
}
