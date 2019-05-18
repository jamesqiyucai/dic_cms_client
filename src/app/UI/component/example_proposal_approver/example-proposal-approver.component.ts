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
import {ExampleProposalConstructorComponentDto} from '../example_proposal_constructor/example-proposal-constructor.component.dto';

@Component({
  selector: 'app-example-proposal-approver',
  templateUrl: './example-proposal-approver.component.html'
})
export class ExampleProposalApproverComponent implements OnInit, OnDestroy {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  private _pendingItems: Array<ExampleProposalApproverComponentDto>;
  private _focusedItemIndex: number;
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
      map(proposals => proposals.filter(proposal => proposal.purpose === this.exampleProposalService.types.ExampleProposalPurpose.review))
    ).subscribe(proposals => {
      this._pendingItems = proposals.map(serviceProposal => {
        let componentSource: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;

        if (serviceProposal.source) {
          switch (serviceProposal.source.type) {
            case this.exampleProposalService.types.ExampleProposalSourceType.book: {
              componentSource = {
                type: ExampleSourceComponentTypes.book,
                author: serviceProposal.source.author,
                title: serviceProposal.source.title,
                page: serviceProposal.source.page,
                initialPublishingYear: serviceProposal.source.initialPublishingYear,
                publishedYear: serviceProposal.source.publishedYear,
                publishedPlace: serviceProposal.source.publishedPlace,
              };
              break;
            }
            case this.exampleProposalService.types.ExampleProposalSourceType.journal: {
              componentSource = {
                type: ExampleSourceComponentTypes.journal,
                author: serviceProposal.source.author,
                title: serviceProposal.source.title,
                page: serviceProposal.source.page,
                passageTitle: serviceProposal.source.passageTitle,
                publishingDate: serviceProposal.source.publishingDate,
              };
              break;
            }
          }
        } else {
          componentSource = null;
        }

        const componentProposal: ExampleProposalApproverComponentDto = {
          identifier: serviceProposal.identifier,
          proposer: this.userService.getUser(serviceProposal.initiator),
          id: serviceProposal.id,
          version: serviceProposal.version,
          text: serviceProposal.text,
          format: { italics: List(serviceProposal.format.italic) },
          translations: List(serviceProposal.translations),
          keywords: List(serviceProposal.keywords),
          comment: serviceProposal.comment,
          note: serviceProposal.note,
          source: componentSource,
        };

        return componentProposal;
      }).toArray();
    });

    this.exampleProposalService.loadPendingProposalsInService(this.userService.getCurrentUser());

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

