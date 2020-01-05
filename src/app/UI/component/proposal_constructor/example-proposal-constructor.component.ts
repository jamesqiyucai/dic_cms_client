import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ExampleProposalEditorComponent} from '../example_proposal_editor_component/example-proposal-editor-component';
import {PROPOSAL_REPOSITORY, ProposalHandle, ProposalRepository} from '../../../service/proposal';

@Component({
  selector: 'app-example-proposal-constructor',
  template: `
    <div>
      <app-example-editor [handle]="proposalHandle"></app-example-editor>
      <button (click)="onNew()">New</button>
      <button (click)="onSubmit()" [disabled]="!canSubmit">Submit</button>
    </div>
  `
})
export class ExampleProposalConstructorComponent implements OnInit, OnDestroy {
  @ViewChild(ExampleProposalEditorComponent) private exampleEditor: ExampleProposalEditorComponent;
  private proposalHandle: ProposalHandle;
  private _canSubmit = true;

  constructor(@Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository) {
    this.proposalHandle = proposalRepository.createProposal();
  }
  private get canSubmit() {
    return this._canSubmit;
  }
  private onSubmit() {
    this.lock();
  }

  private onNew() {
    this.proposalHandle = this.proposalRepository.createProposal();
    this.unlock();
  }

  /*****************************************************************************/
  public ngOnInit(): void {
    this.unlock();
  }
  public lock() {
    this.exampleEditor.lock();
    this._canSubmit = false;
  }

  public unlock() {
    this.exampleEditor.unlock();
    this._canSubmit = true;
  }

}
