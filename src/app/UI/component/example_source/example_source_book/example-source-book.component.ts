import {Component, OnInit} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceBookComponentModel} from '../../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceBookComponentDto} from './example-source-book.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';
import {ExampleSourceJournalComponentDto} from '../example_source_journal/example-source-journal.component.dto';

@Component({
  selector: 'app-example-source-paperbook',
  templateUrl: './example-source-book.component.html'
})
export class ExampleSourceBookComponent extends SourceComponent implements OnInit {
  protected sourceModel: ExampleSourceBookComponentModel;

  constructor() {
    super();
  }

  public get page() {
    return this.sourceModel.page;
  }

  public get initialPublishingYear() {
    return this.sourceModel.initialPublishingYear;
  }

  public get publishedYear() {
    return this.sourceModel.publishedYear;
  }

  public get publishedPlace() {
    return this.sourceModel.publishedPlace;
  }

  public changePage(newPage: string) {
    this.sourceModel.page = Number(newPage);
    this.dataChange.emit(this.getDto());
  }

  public changeInitialPublishingYear(newYear: string) {
    this.sourceModel.initialPublishingYear = Number(newYear);
    this.dataChange.emit(this.getDto());
  }

  public changePublishedYear(newYear: string) {
    this.sourceModel.publishedYear = Number(newYear);
    this.dataChange.emit(this.getDto());
  }

  public changePublishedPlace(newPlace: string) {
    this.sourceModel.publishedPlace = newPlace;
    this.dataChange.emit(this.getDto());
  }

  public ngOnInit() {
    this.sourceModel = new ExampleSourceBookComponentModel('', '', null, null, null, '');
  }

  public fillData(data: ExampleSourceBookComponentDto) {
    this.sourceModel.author = data.author;
    this.sourceModel.title = data.title;
    this.sourceModel.page = data.page;
    this.sourceModel.initialPublishingYear = data.initialPublishingYear;
    this.sourceModel.publishedYear = data.publishedYear;
    this.sourceModel.publishedPlace = data.publishedPlace;
    this.dataChange.emit(this.getDto());
  }

  getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto {
    return {
      type: ExampleSourceComponentTypes.book,
      author: this.sourceModel.author,
      title: this.sourceModel.title,
      page: this.sourceModel.page,
      initialPublishingYear: this.sourceModel.initialPublishingYear,
      publishedYear: this.sourceModel.publishedYear,
      publishedPlace: this.sourceModel.publishedPlace,
    };
  }

}
