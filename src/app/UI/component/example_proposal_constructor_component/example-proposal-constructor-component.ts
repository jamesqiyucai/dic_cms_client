import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {PROPOSAL_REPOSITORY, ProposalRepository} from '../../../service/proposal';
import {ExampleProposalEditorComponentModel} from '../example_proposal_editor_component/example-proposal-editor-component-model';

@Component({
  selector: 'app-proposal-constructor',
  templateUrl: './example-proposal-constructor-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalConstructorComponent {
  public proposalModel: ExampleProposalEditorComponentModel;
  constructor(@Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository) {
    this.proposalModel = new ExampleProposalEditorComponentModel(this.proposalRepository.createBlankProposal());
  }
}
