import {Component} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourcePaperbookComp} from '../../../model/example_source_paperbook/example-source-paperbook-comp.class';

@Component({
  selector: 'app-example-source-paperbook',
  templateUrl: './example-source-paperbook.component.html'
})
export class ExampleSourcePaperbookComponent extends SourceComponent {
  protected sourceInfo: ExampleSourcePaperbookComp;

  public deleteSource(): void {}

  public get page() {
    return this.sourceInfo.page;
  }

  public changePage(newPage: number) {
    this.sourceInfo.page = newPage;
  }

  public get initialPublishingYear() {
    return this.sourceInfo.initialPublishingYear;
  }

  public changeInitialPublishingYear(newYear: number) {
    this.sourceInfo.initialPublishingYear = newYear;
  }

  public get publishedYear() {
    return this.sourceInfo.publishedYear;
  }

  public changePublishedYear(newYear: number) {
    this.sourceInfo.publishedYear = newYear;
  }

  public get publishedPlace() {
    return this.sourceInfo.publishedPlace;
  }

  public changePublishedPlace(newPlace: string) {
    this.sourceInfo.publishedPlace = newPlace;
  }
}
