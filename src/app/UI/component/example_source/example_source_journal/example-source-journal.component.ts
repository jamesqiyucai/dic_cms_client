import {Component, OnInit} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceJournalComponentModel} from '../../../model/example_source_journal/example-source-journal-component.model';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
})
export class ExampleSourceJournalComponent extends SourceComponent implements OnInit{
  protected sourceData: ExampleSourceJournalComponentModel;

  constructor() {
    super();
  }

  public get passageTitle() {
    return this.sourceData.passageTitle;
  }

  public get pageNumber() {
    return this.sourceData.page;
  }

  public get publishingDate() {
    return this.sourceData.publishingDate;
  }

  public changePassageTitle(newTitle: string) {
    this.sourceData.passageTitle = newTitle;
    this.dataChange.emit(this.sourceData);
  }

  public dateChange(newDate: string) {
    this.sourceData.publishingDate = newDate;
    this.dataChange.emit(this.sourceData);
  }

  public changePageNumber(newNumber: string) {
    this.sourceData.page = +newNumber;
    this.dataChange.emit(this.sourceData);
  }

  ngOnInit(): void {
    this.sourceData = new ExampleSourceJournalComponentModel('', null, null, null, null);
  }

  public fillData(data: ExampleSourceJournalComponentModel) {
    this.sourceData = data;
  }
}
