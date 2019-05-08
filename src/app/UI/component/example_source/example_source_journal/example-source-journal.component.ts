import {Component, OnInit} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceJournalComponentModel} from '../../../model/example_source_journal/example-source-journal-component.model';
import {ExampleSourceJournalComponentDto} from './example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';
import {ExampleSourceBookComponentDto} from '../example_source_book/example-source-book.component.dto';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
})
export class ExampleSourceJournalComponent extends SourceComponent implements OnInit {
  protected sourceModel: ExampleSourceJournalComponentModel;

  constructor() {
    super();
    this.sourceModel = new ExampleSourceJournalComponentModel('', null, null, null, null);
  }

  public get passageTitle() {
    return this.sourceModel.passageTitle;
  }

  public get page() {
    return this.sourceModel.page;
  }

  public get publishingDate() {
    return this.sourceModel.publishingDate;
  }

  public changePassageTitle(newTitle: string) {
    this.sourceModel.passageTitle = newTitle;
    this.dataChange.emit(this.getDto());
  }

  public dateChange(newDate: string) {
    this.sourceModel.publishingDate = newDate;
    this.dataChange.emit(this.getDto());
  }

  public changePageNumber(newNumber: string) {
    this.sourceModel.page = +newNumber;
    this.dataChange.emit(this.getDto());
  }

  ngOnInit(): void {
  }

  public fillData(data: ExampleSourceJournalComponentDto) {
    this.sourceModel.author = data.author;
    this.sourceModel.title = data.title;
    this.sourceModel.page = data.page;
    this.sourceModel.passageTitle = data.passageTitle;
    this.sourceModel.publishingDate = data.publishingDate;
    this.dataChange.emit(this.getDto());
  }

  getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto {
    return {
      type: ExampleSourceComponentTypes.journal,
      author: this.sourceModel.author,
      title: this.sourceModel.title,
      page: this.sourceModel.page,
      passageTitle: this.sourceModel.passageTitle,
      publishingDate: this.sourceModel.publishingDate,
    };
  }
}
