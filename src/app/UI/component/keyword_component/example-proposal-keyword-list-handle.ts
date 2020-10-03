import {ListManipulatorHandle} from '../list_manipulator/list-manipulator-handle';
import {ProposalKeywordHandle} from '../../../service/proposal/document/keyword/proposal-keyword-handle';
import {ProposalEditorHandle} from '../../../service/proposal';
import {List} from 'immutable';

export class ExampleProposalKeywordListHandle implements ListManipulatorHandle<ProposalKeywordHandle> {
  private _proposalHandle: ProposalEditorHandle;
  constructor(handle: ProposalEditorHandle) {
    this._proposalHandle = handle;
  }
  public get list$() {
    return this._proposalHandle.keywords$;
  }
  public setList(newList: List<ProposalKeywordHandle>) {
    this._proposalHandle.setKeywords(newList);
  }
}
