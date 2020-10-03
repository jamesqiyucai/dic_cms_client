import {ExampleProposalReviewerSourceModel} from '../example_proposal_reviewer_source/example-proposal-reviewer-source-model';
import {Observable} from 'rxjs';

export interface ExampleProposalReviewerBookSourceModel extends ExampleProposalReviewerSourceModel {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
