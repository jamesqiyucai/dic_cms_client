import {Component, Inject, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal-service.interface';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-example-proposal-approver',
  templateUrl: './example-proposal-approver.component.html'
})
export class ExampleProposalApproverComponent {
  @ViewChild(ExampleEditorComponent) exampleEditor: ExampleEditorComponent;
  public pendingExampleProposalTexts: Observable<string>[];
  private pendingExampleProposalIds: number[];

  constructor(
    @Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService,
    @Inject(USER_SERVICE) private userService: UserService
    ) {}

  public getPendingProposals() {
    this.pendingExampleProposalIds = [];
    this.pendingExampleProposalTexts = [];
    this.exampleProposalService.loadPendingProposalsInService(this.userService.getUser()).subscribe(ids => {
      this.pendingExampleProposalIds = ids;
      this.pendingExampleProposalTexts = ids.map(id => this.exampleProposalService.getPersistentExampleProposal(id).pipe(
        map(data => data.text)
      ));
    });
  }

  public loadExampleProposal(id: number) {
    this.exampleEditor.loadPersistentExampleProposal(id);
  }

  public approve() {
    this.exampleEditor.approveExampleProposal();
  }

  public reject() {
    this.exampleEditor.rejectExampleProposal();
  }
}
