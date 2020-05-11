import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExampleProposalBookSourceComponentModel} from './example-proposal-book-source-component-model';

@Component({
  selector: 'app-proposal-book-source',
  templateUrl: './example-proposal-book-source.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalBookSourceComponent {
  @Input() public model: ExampleProposalBookSourceComponentModel;
  constructor() {
    this.model = new ExampleProposalBookSourceComponentModel();
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
      this.model.initialPublishingYear = newYear;
    }
  }

  public onPublishedPlaceChange(newPlace: string) {
    if (this.model) {
      this.model.publishedPlace = newPlace;
    }
  }
}