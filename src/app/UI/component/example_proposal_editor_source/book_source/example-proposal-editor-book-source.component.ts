import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalEditorBookSourceModelImpl} from './example-proposal-editor-book-source-model-impl';
import {ProposalBookSourceDocumentFakeImpl} from '../../../../service/proposal/document/source/proposal_book_source/proposal-book-source-document-fake-impl';

@Component({
  selector: 'app-proposal-book-source',
  templateUrl: './example-proposal-editor-book-source.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalEditorBookSourceComponent {
  @Input() public model: ExampleProposalEditorBookSourceModelImpl;
  constructor() {
    this.model = new ExampleProposalEditorBookSourceModelImpl(new ProposalBookSourceDocumentFakeImpl());
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
  public onInitialPublishingYearChange(newYear: string) {
    if (this.model) {
      this.model.initialPublishingYear = newYear;
    }
  }

  public onPublishedYearChange(newYear: string) {
    if (this.model) {
      this.model.publishedYear = newYear;
    }
  }

  public onPublishedPlaceChange(newPlace: string) {
    if (this.model) {
      this.model.publishedPlace = newPlace;
    }
  }
}
