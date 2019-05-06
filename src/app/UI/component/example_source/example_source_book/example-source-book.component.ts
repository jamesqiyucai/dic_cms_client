import {Component, OnInit} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceBookComponentModel} from '../../../model/example_source_book/example-source-book-component.model';

@Component({
  selector: 'app-example-source-paperbook',
  templateUrl: './example-source-book.component.html'
})
export class ExampleSourceBookComponent extends SourceComponent implements OnInit {
  protected sourceData: ExampleSourceBookComponentModel;

  constructor() {
    super();
  }

  public get page() {
    return this.sourceData.page;
  }

  public get initialPublishingYear() {
    return this.sourceData.initialPublishingYear;
  }

  public get publishedYear() {
    return this.sourceData.publishedYear;
  }

  public get publishedPlace() {
    return this.sourceData.publishedPlace;
  }

  public changePage(newPage: string) {
    this.sourceData.page = Number(newPage);
    this.dataChange.emit(this.sourceData);
  }

  public changeInitialPublishingYear(newYear: string) {
    this.sourceData.initialPublishingYear = Number(newYear);
    this.dataChange.emit(this.sourceData);
  }

  public changePublishedYear(newYear: string) {
    this.sourceData.publishedYear = Number(newYear);
    this.dataChange.emit(this.sourceData);
  }

  public changePublishedPlace(newPlace: string) {
    this.sourceData.publishedPlace = newPlace;
    this.dataChange.emit(this.sourceData);
  }

  public ngOnInit() {
    this.sourceData = new ExampleSourceBookComponentModel('', '', null, null, null, '');
  }

  public fillData(data: ExampleSourceBookComponentModel) {
    this.sourceData = data;
  }

}
