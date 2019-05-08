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
  protected _passageTitle: string;
  protected _publishingDate: string;

  constructor() {
    super();
    this.sourceModel = new ExampleSourceJournalComponentModel('', null, null, null, null);
  }

  private get passageTitle() {
    return this._passageTitle;
  }

  private set passageTitle(newPassageTitle: string) {
    if (this.passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
      this.fireSourceDataChangeEvent();
    }
  }

  private get publishingDate() {
    return this._publishingDate;
  }

  private set publishingDate(newPublishingDate: string) {
    if (this.publishingDate !== newPublishingDate) {
      this._publishingDate = newPublishingDate;
      this.fireSourceDataChangeEvent();
    }
  }

  public onPassageTitleChange(newTitle: string) {
    this.passageTitle = newTitle;
  }

  public onPublishingDateChange(newDate: string) {
    this.publishingDate = newDate;
  }

  ngOnInit(): void {
  }

  public update(data: ExampleSourceJournalComponentDto) {
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
