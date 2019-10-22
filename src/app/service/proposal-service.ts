import {ExampleService} from './example-service';

export interface ProposalService extends ExampleService {
  initiator: number;
  status: string;
  exampleID: number;
}
