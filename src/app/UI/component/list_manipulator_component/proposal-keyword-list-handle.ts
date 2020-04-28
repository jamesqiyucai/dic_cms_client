import {ListManipulatorHandle} from './list-manipulator-handle';
import {ProposalKeywordHandle} from '../../../service/proposal/proposal-keyword-handle';
import {ProposalHandle} from '../../../service/proposal';
import {List} from 'immutable';

export class ProposalKeywordListHandle implements ListManipulatorHandle<ProposalKeywordHandle> {
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
