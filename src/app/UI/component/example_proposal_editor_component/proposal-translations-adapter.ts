import {ProposalHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {ListOrigin} from '../list_manipulator_component/list-origin';
import {List} from 'immutable';

export class ProposalTranslationsAdapter implements ListOrigin {
  private proposalHandle: ProposalHandle;
  constructor(proposalHandle: ProposalHandle) {
    this.proposalHandle = proposalHandle;
  }
  public get $list() {
    return this.proposalHandle.$translations;
  }
  public get list() {
    return this.proposalHandle.translations;
  }
  public set list(newList: List<ProposalTranslationHandle>) {
    this.proposalHandle.translations = newList;
  }
  public add(): any {
    this.proposalHandle.translations = this.proposalHandle.translations.push(this.proposalHandle.createTranslation());
  }
  public move(from: number, to: number): any {
    this.proposalHandle.translations = this.proposalHandle.translations.remove(from).insert(to, this.proposalHandle.translations.get(from));
  }
  public remove(index: number): any {
    this.proposalHandle.translations = this.proposalHandle.translations.remove(index);
  }
}
