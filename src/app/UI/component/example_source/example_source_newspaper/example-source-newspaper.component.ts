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

  public get pageNumber() {
    return this.sourceInfo.pageNumber;
  }

  public changePageNumber(newNumber: string) {
    this.sourceInfo.pageNumber = Number(newNumber);
  }

  public getPublishingDate() {
    return this.sourceInfo.getPublishingDate();
  }

  public dateChange(newDate: string) {
    this.sourceInfo.dateChange(newDate);
  }
}
