import {AfterViewInit, Component, EventEmitter, Inject, OnDestroy, Output, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleSourceBookComponentModel} from '../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceJournalComponentModel} from '../../model/example_source_journal/example-source-journal-component.model';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal.service';

@Component({
  selector: 'app-example-proposal-constructor',
  template: `
    <div>
      <app-example-editor [editingEnabled]="true"></app-example-editor>
      <button (click)="createPersistentExampleProposal()">Submit</button>
    </div>
  `
})
export class ExampleProposalConstructorComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  @Output() proposalCreated = new EventEmitter();
  private exampleProposalIdentifier: number;

  constructor(@Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService) {}

  public fillData(
    exampleId: number,
    text: string,
    italic: Array<[number, number]>,
    keywords: Array<string>,
    translations: Array<string>,
    stories: Array<StoryComp>,
    note: string,
    comment: string,
    source: ExampleSourceBookComponentModel & ExampleSourceJournalComponentModel
  ) {
    this.exampleEditor.fillData(
      exampleId,
      text,
      italic,
      keywords,
      translations,
      stories,
      note,
      comment,
      source
    );
  }

  public createPersistentExampleProposal() {
    this.updateExampleProposalServiceData();
    this.exampleProposalService.createPersistentExampleProposal(this.exampleProposalIdentifier).subscribe(() => {
      this.refresh();
      alert('Successfully Submitted the Proposal');
    });
  }

  public updateExampleProposalServiceData() {
    const exampleEditorData = this.exampleEditor.getData();
    const newExampleProposalServ = this.exampleProposalService.getNewExampleProposalServ(
      exampleEditorData.text,
      exampleEditorData.italic,
      exampleEditorData.translations,
      exampleEditorData.keywords,
      exampleEditorData.note,
      exampleEditorData.comment,
      exampleEditorData.source
    );
    this.exampleProposalService.updateExampleProposalInService(this.exampleProposalIdentifier, newExampleProposalServ);
  }

  public refresh() {
    this.exampleEditor.refresh();
  }

  ngAfterViewInit(): void {
    const exampleEditorData = this.exampleEditor.getData();
    const newExampleProposalServ = this.exampleProposalService.getNewExampleProposalServ(
      exampleEditorData.text,
      exampleEditorData.italic,
      exampleEditorData.translations,
      exampleEditorData.keywords,
      exampleEditorData.note,
      exampleEditorData.comment,
      exampleEditorData.source
    );
    this.exampleProposalService.createNewExampleProposalInService(newExampleProposalServ);
    this.exampleProposalIdentifier = newExampleProposalServ.identifier;
    this.exampleProposalService.subscribeToExampleProposalInService(this.exampleProposalIdentifier, (proposal) => {
      this.exampleEditor.fillData(
        proposal.exampleId,
        proposal.text,
        proposal.format.italic,
        proposal.keywords,
        proposal.translations,
        [],
        proposal.note,
        proposal.comment,
        proposal.source ? {
          type: proposal.source.type,
          author: proposal.source.author,
          title: proposal.source.title,
          page: proposal.source.page,
          initialPublishingYear: proposal.source.initialPublishingYear,
          publishedYear: proposal.source.publishedYear,
          publishedPlace: proposal.source.publishedPlace,
          passageTitle: proposal.source.passageTitle,
          publishingDate: proposal.source.publishingDate
        } : undefined
      );
    });
  }

  ngOnDestroy(): void {
    this.exampleProposalService.unsubscribeFromExampleProposalInService(this.exampleProposalIdentifier);
    this.exampleProposalService.removeExampleProposalInService(this.exampleProposalIdentifier);
  }
}
