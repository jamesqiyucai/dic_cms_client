import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {ProposalJournalSourceComponentModel} from './proposal-journal-source-component-model';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleSourceJournalComponent {
  @Input() public model?: ProposalJournalSourceComponentModel;
  constructor() {}
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
