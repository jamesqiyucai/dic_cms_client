import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalJournalSourceComponentModel} from './example-proposal-journal-source-component-model';

@Component({
  selector: 'app-proposal-journal-source',
  templateUrl: './example-proposal-journal-source.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalJournalSourceComponent {
  @Input() public model: ExampleProposalJournalSourceComponentModel;
  constructor() {
    this.model = new ExampleProposalJournalSourceComponentModel();
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
