import {ListManipulatorHandle} from '../list_manipulator/list-manipulator-handle';
import {ProposalEditorHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {List} from 'immutable';

export class ExampleProposalTranslationsListHandle implements ListManipulatorHandle<ProposalTranslationHandle> {
  private _proposalHandle: ProposalEditorHandle;
  constructor(handle: ProposalEditorHandle) {
    this._proposalHandle = handle;
  }
  public get list$() {
    return this._proposalHandle.translations$;
  }
  public setList(newList: List<ProposalTranslationHandle>) {
    this._proposalHandle.setTranslations(newList);
  }
}
