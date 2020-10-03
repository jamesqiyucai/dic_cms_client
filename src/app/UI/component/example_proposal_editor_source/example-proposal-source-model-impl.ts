  import {ExampleProposalEditorSourceModel} from './example-proposal-editor-source-model';
  import {SourceType} from '../../../source-type';

export abstract class ExampleProposalSourceModelImpl implements ExampleProposalEditorSourceModel {
  private readonly _type: SourceType;
  private _editable: boolean;
  protected constructor(type: SourceType) {
    this._type = type;
    this._editable = true;
  }
  public get editable() {
    return this._editable;
  }
  public get type() {
    return this._type;
  }
  public enableEditing() {
    this._editable = true;
  }
  public disableEditing() {
    this._editable = false;
  }
}
