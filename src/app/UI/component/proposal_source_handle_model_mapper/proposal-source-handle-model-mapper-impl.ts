import {ProposalSourceHandleModelMapper} from './proposal-source-handle-model-mapper';
import {ExampleProposalReviewerSourceModel} from '../example_proposal_reviewer_source/example-proposal-reviewer-source-model';
import {ProposalSourceHandle, SourceType} from '../../../service/proposal';
import {ExampleProposalEditorSourceModel} from '../example_proposal_editor_source/example-proposal-editor-source-model';

export class ProposalSourceHandleModelMapperImpl implements ProposalSourceHandleModelMapper {
  getProposalEditorSourceModel(handle: ProposalSourceHandle | null): ExampleProposalEditorSourceModel | null {
    return undefined;
  }

  getProposalReviewerSourceModel(handle: ProposalSourceHandle | null): ExampleProposalReviewerSourceModel | null {
    if (handle) {
      if (handle.getType() === SourceType.Book) {
        const bookSourceModel = new
      }
    } else {
      return null;
    }
  }

}
