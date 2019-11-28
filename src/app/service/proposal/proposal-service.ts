import {ExampleService} from '../example';
import {ProposalStatusInstruction} from './proposal-status-instruction';

export interface ProposalService extends ExampleService {
  initiator: number;
  status: string;
  exampleID: number;
  setStatus(newStatus: ProposalStatusInstruction);
}

