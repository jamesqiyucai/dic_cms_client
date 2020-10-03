import {ExampleProposalReviewerSourceModel} from '../example_proposal_reviewer_source/example-proposal-reviewer-source-model';
import {Observable} from 'rxjs';

export interface ExampleProposalReviewerJournalSourceModel extends ExampleProposalReviewerSourceModel {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly passageTitle$: Observable<string>;
  readonly publishDate$: Observable<string>;
}
