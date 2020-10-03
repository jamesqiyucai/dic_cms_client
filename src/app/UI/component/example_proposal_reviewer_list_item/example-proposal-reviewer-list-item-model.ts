import {Observable} from 'rxjs';

export interface ExampleProposalReviewerListItemModel {
  readonly text$: Observable<string>;
  readonly initiator$: Observable<string>;
}
