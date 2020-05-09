import {ProposalSourceType} from '../../../service/proposal';

export abstract class AbstractExampleProposalSourceComponentModel {
  private readonly _type: ProposalSourceType;
  public editable: boolean;
  protected constructor(type: ProposalSourceType) {
    this._type = type;
    this.editable = true;
  }
  public get type() {
    return this._type;
  }
}
