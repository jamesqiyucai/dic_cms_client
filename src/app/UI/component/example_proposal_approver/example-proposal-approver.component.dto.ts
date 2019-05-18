import {ExampleProposalConstructorComponentDto} from '../example_proposal_constructor/example-proposal-constructor.component.dto';

export interface ExampleProposalApproverComponentDto extends ExampleProposalConstructorComponentDto {
  proposer: string;
}
