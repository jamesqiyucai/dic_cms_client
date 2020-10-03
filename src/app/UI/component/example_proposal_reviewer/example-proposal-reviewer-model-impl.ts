import {ExampleProposalReviewerModel} from './example-proposal-reviewer-model';
import {ProposalReviewerHandle} from '../../../service/proposal/proposal-reviewer-handle';
import {BehaviorSubject, Observable} from 'rxjs';
import {List} from 'immutable';
import {ExampleProposalReviewerListItemModel} from '../example_proposal_reviewer_list_item/example-proposal-reviewer-list-item-model';
import {ExampleProposalReviewerItemDetailModel} from '../example_proposal_reviewer_item_detail/example-proposal-reviewer-item-detail-model';

export class ExampleProposalReviewerModelImpl implements ExampleProposalReviewerModel {
  private proposalsToReview: ExampleProposalReviewerListItemModel[];
  private selectedProposal: null | ExampleProposalReviewerItemDetailModel;
  public readonly selectedProposal$: BehaviorSubject<null | ExampleProposalReviewerItemDetailModel>;
  public readonly proposalsToReview$: BehaviorSubject<List<ExampleProposalReviewerListItemModel>>;
  constructor(proposalHandles: List<ProposalReviewerHandle>) {
    this.proposalsToReview = [];
    this.selectedProposal = null;
    this.selectedProposal$ = new BehaviorSubject<ExampleProposalReviewerItemDetailModel|null>(null);
    this.proposalsToReview$ = new BehaviorSubject<List<ExampleProposalReviewerListItemModel>>(List());

    this.proposalsToReview = proposalHandles;
  }
  private set proposalToReview(handles: List<ProposalReviewerHandle>) {
    this.proposalsToReview = handles.map(handle => {});
  }
}
