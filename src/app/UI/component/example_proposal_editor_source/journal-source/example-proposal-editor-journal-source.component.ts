import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalEditorJournalSourceModelImpl} from './example-proposal-editor-journal-source-model-impl';
import {ProposalJournalSourceDocumentFakeImpl} from '../../../../service/proposal/document/source/proposal_journal_source/proposal-journal-source-document-fake-impl';

@Component({
  selector: 'app-proposal-journal-source',
  templateUrl: './example-proposal-editor-journal-source.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalEditorJournalSourceComponent {
  @Input() public model: ExampleProposalEditorJournalSourceModelImpl;
  constructor() {
    this.model = new ExampleProposalEditorJournalSourceModelImpl(new ProposalJournalSourceDocumentFakeImpl());
  }
  public onAuthorChange(newAuthor: string) {
    if (this.model) {
      this.model.author = newAuthor;
    }
  }
  public onTitleChange(newTitle: string) {
    if (this.model) {
      this.model.title = newTitle;
    }
  }
  public onPageChange(newPage: string) {
    if (this.model) {
      this.model.page = newPage;
    }
  }
  public onPassageTitleChange(newTitle: string) {
    if (this.model) {
      this.model.passageTitle = newTitle;
    }
  }

  public onPublishingDateChange(newDate: string) {
    if (this.model) {
      this.model.publishDate = newDate;
    }
  }
}
