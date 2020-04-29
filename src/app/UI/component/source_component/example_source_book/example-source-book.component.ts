import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {ProposalBookSourceComponentModel} from './proposal-book-source-component-model';

@Component({
  selector: 'app-example-source-book',
  templateUrl: './example-source-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleSourceBookComponent {
  @Input() model?: ProposalBookSourceComponentModel;
  constructor() {}
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

  public ngOnChanges(): void {
    this._sourceHandle.$author.subscribe(author => this.author = author);
    this._sourceHandle.$title.subscribe(title => this.title = title);
    this._sourceHandle.pageObservable.subscribe(page => this.page = page);
    this._sourceHandle.initialPublishingYearObservable.subscribe(initialPublishingYear => this.initialPublishingYear = initialPublishingYear);
    this._sourceHandle.publishedYearObservable.subscribe(publishedYear => this.publishedYear = publishedYear);
    this._sourceHandle.publishedPlaceObservable.subscribe(publishedPlace => this.publishedPlace = publishedPlace);
  }
}
