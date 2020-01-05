import {NgModule} from '@angular/core';
import {ExampleProposalApproverComponent} from './example-proposal-approver.component';
import {ExampleEditorModule} from '../example_proposal_editor_component/example-editor.module';
import {CommonModule} from '@angular/common';
import {
  ExampleProposalApproverPendingItemComponent
} from './example_proposal_approver_pending_item/example-proposal-approver-pending-item.component';

@NgModule({
  imports: [CommonModule, ExampleEditorModule],
  declarations: [
    ExampleProposalApproverPendingItemComponent,
    ExampleProposalApproverComponent
  ],
  exports: [ExampleProposalApproverComponent]
})
export class ExampleProposalApproverModule {}
