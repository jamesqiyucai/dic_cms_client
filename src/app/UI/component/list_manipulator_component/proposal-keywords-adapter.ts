import {ListOrigin} from './list-origin';
import {ProposalHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {List} from 'immutable';

export class ProposalKeywordsAdapter implements ListOrigin {
  constructor(private proposalHandle: ProposalHandle) {}
  public get $list() {
    return this.proposalHandle.$keywords;
  }
  public set list(newList: List<string>) {
    this.proposalHandle.keywords = newList;
  }
  public createTranslationHandle(): ProposalTranslationHandle {
    return this.proposalHandle.createTranslation();
  }
}
