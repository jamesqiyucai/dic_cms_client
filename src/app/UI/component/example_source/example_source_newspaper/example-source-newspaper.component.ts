import {Component} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceNewspaperComp} from '../../../model/example_source_newspaper/example-source-newspaper-comp.class';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-newspaper.component.html'
})
export class ExampleSourceNewspaperComponent extends SourceComponent {
  protected sourceInfo: ExampleSourceNewspaperComp;

  public deleteSource(): void {}

  public get passageTitle() {
    return this.sourceInfo.passageTitle;
  }

  public changePassageTitle(newTitle: string) {
    this.sourceInfo.passageTitle = newTitle;
  }

  public get publishingYear() {
    return this.sourceInfo.publishingYear;
  }

  public changePublishingYear(newYear: number) {
    this.sourceInfo.publishingYear = newYear;
  }

  public get publishingMonth() {
    return this.sourceInfo.publishingMonth;
  }

  public changePublishingMonth(newMonth: number) {
    this.sourceInfo.publishingMonth = newMonth;
  }

  public get publishingDay() {
    return this.sourceInfo.publishingDay;
  }

  public changePublishingDay(newDay: number) {
    this.sourceInfo.publishingDay = newDay;
  }

  public getPageNumber() {
    return this.sourceInfo.pageNumber;
  }

  public changePageNumber(newNumber: number) {
    this.sourceInfo.pageNumber = newNumber;
  }
}
