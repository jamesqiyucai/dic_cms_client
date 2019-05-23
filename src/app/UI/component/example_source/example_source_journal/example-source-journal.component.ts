import {Component} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceJournalComponentDto} from './example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
})
export class ExampleSourceJournalComponent extends SourceComponent {
  protected _passageTitle = null;
  protected _publishingDate = null;

  constructor() {
    super();
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

  private onPassageTitleChange(newTitle: string) {
    this.passageTitle = newTitle;
  }

  private onPublishingDateChange(newDate: string) {
    this.publishingDate = newDate;
  }

  protected fireSourceDataChangeEvent() {
    this.dataChange.emit(this.getDto());
  }

  public update(data: ExampleSourceJournalComponentDto) {
    this.author = data.author;
    this.title = data.title;
    this.page =  data.page;
    this.passageTitle = data.passageTitle;
    this.publishingDate = data.publishingDate;
  }

  public getDto(): ExampleSourceJournalComponentDto {
    return {
      type: ExampleSourceComponentTypes.journal,
      author: this.author,
      title: this.title,
      page: this.page,
      passageTitle: this.passageTitle,
      publishingDate: this.publishingDate,
    };
  }
}
