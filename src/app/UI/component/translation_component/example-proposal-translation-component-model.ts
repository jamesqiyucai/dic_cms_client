import {BehaviorSubject} from 'rxjs';
import {ListElementModel} from '../list_manipulator';
import {ProposalTranslationHandle} from '../../../service/proposal';

export class ExampleProposalTranslationComponentModel implements ListElementModel<ProposalTranslationHandle> {
  private _editable: boolean;
  private _text: string;
  private _text$: BehaviorSubject<string>;
  private readonly _handle?: ProposalTranslationHandle;
  constructor(handle?: ProposalTranslationHandle) {
    this._editable = true;
    this._text = '';
    this._text$ = new BehaviorSubject<string>(this._text);
    if (handle) {
      this._handle = handle;
    }
  }
  public get editable() {
    return this._editable;
  }
  public enableEditing() {
    this._editable = true;
  }
  public disableEditing() {
    this._editable = false;
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
  public getHandle(): ProposalTranslationHandle {
    if (this._handle) {
      return this._handle;
    } else {
      throw new Error('handle is undefined');
    }
  }
  public save(): void {
    if (this._handle) {
      this._handle.translation = this._text;
    } else {
      throw new Error('handle is undefined');
    }
  }
}
