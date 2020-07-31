import {ListManipulatorHandle} from '../list_manipulator_component/list-manipulator-handle';
import {ProposalKeywordHandle} from '../../../service/proposal/document/keyword/proposal-keyword-handle';
import {ProposalHandle} from '../../../service/proposal';
import {List} from 'immutable';

export class ExampleProposalKeywordListHandle implements ListManipulatorHandle<ProposalKeywordHandle> {
  private _proposalHandle: ProposalHandle;
  constructor(handle: ProposalHandle) {
    this._proposalHandle = handle;
  }
  public get list$() {
    return this._proposalHandle.keywordsObservable;
  }
  public set list(newList: List<ProposalKeywordHandle>) {
    this._proposalHandle.keywords = newList;
  }
}
