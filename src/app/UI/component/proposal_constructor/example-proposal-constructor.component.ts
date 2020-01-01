import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {List} from 'immutable';
import * as _ from 'lodash';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
import {ExampleProposalConstructorComponentDto} from './example-proposal-constructor.component.dto';
import {ExampleSourceComponentTypes} from '../example_source/example-source.component.types';
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
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  private proposalHandle: ProposalHandle;
  private _canSubmit = true;

  constructor(@Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository) {
    this.proposalHandle = proposalRepository.createProposal();
  }

  private init(): void {}

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
    this.init();
    this.unlock();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
