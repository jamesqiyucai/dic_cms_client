import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal.service';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {ExampleProposalApproverComponentDto} from './example-proposal-approver.component.dto';
import {List} from 'immutable';
import {map} from 'rxjs/operators';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example_source/example-source.component.types';

@Component({
  selector: 'app-example-proposal-approver',
  templateUrl: './example-proposal-approver.component.html'
})
export class ExampleProposalApproverComponent implements OnInit, OnDestroy {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  private _pendingItems: Array<ExampleProposalApproverComponentDto>;
  private _focusedItemIndex: number = null;
  private subscription;

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

  private get showDetail() {
    if (this.focusedItemIndex === null) {
      return false;
    } else {
      return true;
    }
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
      itemToBeDisplayed ? itemToBeDisplayed.id : null,
      itemToBeDisplayed ? itemToBeDisplayed.version : null,
      itemToBeDisplayed ? itemToBeDisplayed.text : '',
      itemToBeDisplayed ? itemToBeDisplayed.format.italics : List(),
      itemToBeDisplayed ? itemToBeDisplayed.keywords : List(),
      itemToBeDisplayed ? itemToBeDisplayed.translations : List(),
      itemToBeDisplayed ? itemToBeDisplayed.note : '',
      itemToBeDisplayed ? itemToBeDisplayed.comment : '',
      itemToBeDisplayed ? itemToBeDisplayed.source : null,
    );
  }

  private onApprove() {
    const proposalToApprove = this.pendingItems.get(this.focusedItemIndex).identifier;
    this.exampleProposalService.approveExampleProposal(proposalToApprove);
  }

  private onReject() {
    const proposalToReject = this.pendingItems.get(this.focusedItemIndex).identifier;
    this.exampleProposalService.rejectExampleProposal(proposalToReject);
  }

  public ngOnInit(): void {
    this.subscription = this.exampleProposalService.exampleProposals.pipe(
      map(proposals => proposals.filter(proposal => proposal.status === 'pending'))
    ).subscribe(proposals => {
      this.focusedItemIndex = null;

      const newPendingItems = proposals.map(serviceProposal => {
        let componentSource: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto = null;



        if (serviceProposal.source) {
          if (this.exampleProposalService.isBook(serviceProposal.source)) {
            componentSource = {
              type: ExampleSourceComponentTypes.book,
              author: serviceProposal.source.author,
              title: serviceProposal.source.title,
              page: serviceProposal.source.page,
              initialPublishingYear: serviceProposal.source.initialPublishingYear,
              publishedYear: serviceProposal.source.publishedYear,
              publishedPlace: serviceProposal.source.publishedPlace,
            };
          } else if (this.exampleProposalService.isJournal(serviceProposal.source)) {
            componentSource = {
              type: ExampleSourceComponentTypes.journal,
              author: serviceProposal.source.author,
              title: serviceProposal.source.title,
              page: serviceProposal.source.page,
              passageTitle: serviceProposal.source.passageTitle,
              publishingDate: serviceProposal.source.publishingDate,
            };
          }
        }

        const componentProposal: ExampleProposalApproverComponentDto = {
          identifier: serviceProposal.identifier,
          proposer: this.userService.getUser(serviceProposal.initiator),
          id: serviceProposal.id,
          version: serviceProposal.version,
          text: serviceProposal.text,
          format: { italics: serviceProposal.italic },
          translations: serviceProposal.translations,
          keywords: serviceProposal.keywords,
          comment: serviceProposal.comment,
          note: serviceProposal.note,
          source: componentSource,
        };

        return componentProposal;
      });
      this._pendingItems = newPendingItems.toArray();
    });

    this.exampleProposalService.loadPendingProposalsInService(this.userService.getCurrentUser());

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

