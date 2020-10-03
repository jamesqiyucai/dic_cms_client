import {ExampleProposalReviewerItemDetailModel} from '../example_proposal_reviewer_item_detail/example-proposal-reviewer-item-detail-model';
import {ExampleProposalReviewerListItemModel} from '../example_proposal_reviewer_list_item/example-proposal-reviewer-list-item-model';
import {List} from 'immutable';
import {Observable} from 'rxjs';

export interface ExampleProposalReviewerModel {
  readonly selectedProposal$: Observable<null | ExampleProposalReviewerItemDetailModel>;
  readonly proposalsToReview$: Observable<List<ExampleProposalReviewerListItemModel>>;
}
