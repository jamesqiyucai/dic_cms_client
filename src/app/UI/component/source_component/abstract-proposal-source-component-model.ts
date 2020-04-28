import {ProposalSourceType} from '../../../service/proposal/proposal-source-type';

export abstract class AbstractProposalSourceComponentModel {
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
