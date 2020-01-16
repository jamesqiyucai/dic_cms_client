import {ListOrigin} from '../list_manipulator_component/list-origin';
import {ProposalHandle} from '../../../service/proposal';
import {List} from 'immutable';
import {ProposalKeywordHandle} from '../../../service/proposal/proposal-keyword-handle';

export class ProposalKeywordsAdapter implements ListOrigin {
  constructor(private proposalHandle: ProposalHandle) {}
  public get $list() {
    return this.proposalHandle.$keywords;
  }
  public get list() {
    return this.proposalHandle.keywords;
  }
  public set list(newList: List<ProposalKeywordHandle>) {
    this.proposalHandle.keywords = newList;
  }
  public add(): any {
    this.proposalHandle.keywords = this.proposalHandle.keywords.push(this.proposalHandle.createKeyword());
  }
  public move(from: number, to: number): any {
    this.proposalHandle.keywords = this.proposalHandle.keywords.remove(from).insert(to, this.proposalHandle.keywords.get(from));
  }
  public remove(index: number): any {
    this.proposalHandle.keywords = this.proposalHandle.keywords.remove(index);
  }
}
