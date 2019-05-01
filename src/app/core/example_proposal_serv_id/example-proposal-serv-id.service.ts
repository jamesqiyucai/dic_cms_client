import {ExampleProposalServIdService} from './example-proposal-serv-id-service.interface';

export class ExampleProposalServIdServiceImpl implements ExampleProposalServIdService {
  private id = 0;

  public getId(): number {
    this.id += 1;
    return this.id;
  }
}
