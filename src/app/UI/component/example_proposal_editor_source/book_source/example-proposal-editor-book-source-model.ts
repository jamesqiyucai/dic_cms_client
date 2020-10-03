import {ExampleProposalReviewerSourceModel} from '../../example_proposal_reviewer_source/example-proposal-reviewer-source-model';

export interface ExampleProposalEditorBookSourceModel extends ExampleProposalReviewerSourceModel {
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
