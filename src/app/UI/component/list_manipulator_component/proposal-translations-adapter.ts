import {ProposalHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {ListOrigin} from './list-origin';
import {List} from 'immutable';

export class ProposalTranslationsAdapter implements ListOrigin {
  private proposalHandle: ProposalHandle;
  constructor(proposalHandle: ProposalHandle) {
    this.proposalHandle = proposalHandle;
  }
  public get $list() {
    return this.proposalHandle.$translations;
  }
  public set list(newList: List<ProposalTranslationHandle>) {
    this.proposalHandle.translations = newList;
  }
  public createTranslationHandle(): ProposalTranslationHandle {
    return this.proposalHandle.createTranslation();
  }
}
