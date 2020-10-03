import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {PROPOSAL_REPOSITORY, ProposalRepository} from '../../../service/proposal';
import {ExampleProposalEditorModelImpl} from '../example_proposal_editor_component/example-proposal-editor-model-impl';

@Component({
  selector: 'app-proposal-constructor',
  templateUrl: './example-proposal-constructor-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalConstructorComponent {
  public proposalModel: ExampleProposalEditorModelImpl;
  constructor(@Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository) {
    this.proposalModel = new ExampleProposalEditorModelImpl(this.proposalRepository.createBlankProposal());
  }
  public onSubmit() {
  }
}
