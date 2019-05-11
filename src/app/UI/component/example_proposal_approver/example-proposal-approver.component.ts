import {Component, Inject, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal.service';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';

@Component({
  selector: 'app-example-proposal-approver',
  templateUrl: './example-proposal-approver.component.html'
})
export class ExampleProposalApproverComponent {
  @ViewChild(ExampleEditorComponent) exampleEditor: ExampleEditorComponent;

  constructor(
    @Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService,
    @Inject(USER_SERVICE) private userService: UserService
    ) {}

}
