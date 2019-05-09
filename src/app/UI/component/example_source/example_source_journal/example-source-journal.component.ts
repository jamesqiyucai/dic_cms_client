import {Component} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceJournalComponentDto} from './example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
})
export class ExampleSourceJournalComponent extends SourceComponent {
  protected _passageTitle: string;
  protected _publishingDate: string;

  constructor() {
    super();
  }

  private get passageTitle() {
    return this._passageTitle;
  }

  private set passageTitle(newPassageTitle: string) {
    if (this.passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
    }
  }

  private get publishingDate() {
    return this._publishingDate;
  }

  private set publishingDate(newPublishingDate: string) {
    if (this.publishingDate !== newPublishingDate) {
      this._publishingDate = newPublishingDate;
    }
  }

  private onPassageTitleChange(newTitle: string) {
    this.passageTitle = newTitle;
    this.fireSourceDataChangeEvent();
  }

  private onPublishingDateChange(newDate: string) {
    this.publishingDate = newDate;
    this.fireSourceDataChangeEvent();
  }

  protected fireSourceDataChangeEvent() {
    this.dataChange.emit(this.getDto());
  }

  public update(data: ExampleSourceJournalComponentDto) {
    let updatedAnything: boolean;
    if (this.author !== data.author) {
      this.author = data.author;
      updatedAnything = true;
    }
    if (this.title !== data.title) {
      this.title = data.title;
      updatedAnything = true;
    }
    if (this.page !== data.page) {
      this.page =  data.page;
      updatedAnything = true;
    }
    if (this.passageTitle !== data.passageTitle) {
      this.passageTitle = data.passageTitle;
      updatedAnything = true;
    }
    if (this.publishingDate !== data.publishingDate) {
      this.publishingDate = data.publishingDate;
      updatedAnything = true;
    }
    if (updatedAnything === true) {
      this.fireSourceDataChangeEvent();
    }
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
