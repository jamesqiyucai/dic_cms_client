import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {PROPOSAL_REPOSITORY, ProposalHandle, ProposalRepository} from "../../../service/proposal";

@Component({
  selector: 'app-proposal-constructor',
  templateUrl: './example-proposal-constructor-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalConstructorComponent implements OnInit {
  private _handle: ProposalHandle;
  private _editable: boolean;
  private _getNewHandle() {
    this._handle = this.proposalRepository.createProposal();
    this._handle.text = 'Please edit the text of your proposed example sentence here.';
  }
  constructor(@Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository) {}
  public get handle() {
    return this._handle;
  }
  public get editable() {
    return this._editable;
  }
  ngOnInit(): void {
    this._getNewHandle();
    this._editable = true;
  }
}
