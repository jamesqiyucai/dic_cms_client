import {ExampleProposalReviewerSourceModel} from '../example_proposal_reviewer_source/example-proposal-reviewer-source-model';

export interface ExampleProposalEditorSourceModel extends ExampleProposalReviewerSourceModel {
  readonly editable: boolean;
  enableEditing(): void;
  disableEditing(): void;
}
