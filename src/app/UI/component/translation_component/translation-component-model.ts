import {BehaviorSubject, Observable} from 'rxjs';
import {ListElementComponentModel} from '../list_manipulator_component/list-element-component-model';
import {ProposalTranslationHandle} from '../../../service/proposal';

export class TranslationComponentModel implements ListElementComponentModel<ProposalTranslationHandle> {
  private _editable: boolean;
  private _text: string;
  private _text$: BehaviorSubject<string>;
  private _handle: ProposalTranslationHandle;
  constructor(handle: ProposalTranslationHandle) {
    this._editable = false;
    this._text = '';
    this._text$ = new BehaviorSubject<string>('');
    this._handle = handle;
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
    }
  }
  public getHandle(): ProposalTranslationHandle {
    return this._handle;
  }
  public save(): void {
    this._handle.text = this._text;
  }
}
