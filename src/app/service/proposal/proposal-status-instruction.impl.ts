import {ProposalStatusInstruction} from './proposal-status-instruction';
import {ProposalStatus} from './proposal-status';

export class ProposalStatusInstructionImpl implements ProposalStatusInstruction {
  constructor(private _newStatus: ProposalStatus) {
    let counter = 0;
    for (const status in ProposalStatus) {
      if (status === _newStatus) {
        counter += 1;
      }
    }
    if (counter <= 0) {
      throw new Error('ProposalStatusInstruction: Unknown proposal status');
    }
  }
  get newStatus() {
    return this._newStatus;
  }
}
