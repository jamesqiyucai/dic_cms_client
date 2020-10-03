import {ProposalEditorHandle} from '../proposal-editor-handle';
import {ProposalReviewerHandle} from '../proposal-reviewer-handle';

export interface ProposalDocument extends ProposalEditorHandle, ProposalReviewerHandle {
  ID?: number;
}
