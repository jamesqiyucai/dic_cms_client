import {ListManipulatorHandle} from './list-manipulator-handle';
import {ProposalHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {List} from 'immutable';

export class ProposalTranslationsListHandle implements ListManipulatorHandle<ProposalTranslationHandle> {
  private _proposalHandle: ProposalHandle;
  constructor(handle: ProposalHandle) {
    this._proposalHandle = handle;
  }
  public get list$() {
    return this._proposalHandle.translationsObservable;
  }
  public set list(newList: List<ProposalTranslationHandle>) {
    this._proposalHandle.translations = newList;
  }
}
