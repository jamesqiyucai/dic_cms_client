import {ProposalSourceHandle} from '../../../service/proposal';
import {ExampleProposalReviewerSourceModel} from '../example_proposal_reviewer_source/example-proposal-reviewer-source-model';
import {ExampleProposalEditorSourceModel} from '../example_proposal_editor_source/example-proposal-editor-source-model';

export interface ProposalSourceHandleModelMapper {
  getProposalReviewerSourceModel(handle: ProposalSourceHandle | null): ExampleProposalReviewerSourceModel | null;
  getProposalEditorSourceModel(handle: ProposalSourceHandle | null): ExampleProposalEditorSourceModel | null;
}
