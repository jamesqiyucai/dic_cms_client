import {ExampleProposalReviewerJournalSourceModel} from '../../example_proposal_reviewer_journal_source/example-proposal-reviewer-journal-source-model';

export interface ExampleProposalEditorJournalSourceModel extends ExampleProposalReviewerJournalSourceModel {
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setPassageTitle(newTitle: string): void;
  setPublishDate(newDate: string): void;
}
