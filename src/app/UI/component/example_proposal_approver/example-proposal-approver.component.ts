import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal.service';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {ExampleProposalApproverComponentDto} from './example-proposal-approver.component.dto';
import {List} from 'immutable';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-example-proposal-approver',
  templateUrl: './example-proposal-approver.component.html'
})
export class ExampleProposalApproverComponent implements OnInit {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  private _pendingItems: Array<ExampleProposalApproverComponentDto>;
  private _focusedItemIndex: number;

  constructor(
    @Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService,
    @Inject(USER_SERVICE) private userService: UserService
  ) {}

  private get pendingItems() {
    return List(this._pendingItems);
  }

  private get focusedItemIndex() {
    return this._focusedItemIndex;
  }

  private set focusedItemIndex(newIndex: number) {
    if (this.focusedItemIndex !== newIndex) {
      this._focusedItemIndex = newIndex;
      this.updateView();
    }
  }

  private onItemFocus(index: number) {
    this.focusedItemIndex = index;
  }

  private isFocused(index: number) {
    return this.focusedItemIndex === index;
  }

  private updateView() {
    const itemToBeDisplayed = this.pendingItems.get(this.focusedItemIndex);
    this.exampleEditor.update(
      itemToBeDisplayed.id,
      itemToBeDisplayed.version,
      itemToBeDisplayed.text,
      itemToBeDisplayed.format.italics,
      itemToBeDisplayed.keywords,
      itemToBeDisplayed.translations,
      itemToBeDisplayed.note,
      itemToBeDisplayed.comment,
      itemToBeDisplayed.source,
    );
  }

  public ngOnInit(): void {
    this.exampleProposalService.exampleProposals.pipe(
      filter(proposal => proposal.)
    )
    this.exampleProposalService.loadPendingProposalsInService(this.userService.getUser());

  }

}

