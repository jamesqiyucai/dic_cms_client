import {Component} from '@angular/core';
import {SourceComponent} from '../abstract_source/source.component';
import {ExampleSourceBookComponentDto} from './example-source-book.component.dto';
import {ExampleSourceComponentTypes} from '../example-source.component.types';

@Component({
  selector: 'app-example-source-book',
  templateUrl: './example-source-book.component.html'
})
export class ExampleSourceBookComponent extends SourceComponent {
  protected _initialPublishingYear: number;
  protected _publishedYear: number;
  protected _publishedPlace = null;


  constructor() {
    super();
  }

  private get initialPublishingYear() {
    return this._initialPublishingYear;
  }

  private set initialPublishingYear(newYear: number) {
    if (this.initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this.fireSourceDataChangeEvent();
    }
  }

  private get publishedYear() {
    return this._publishedYear;
  }

  private set publishedYear(newYear: number) {
    if (this.publishedYear !== newYear) {
      this._publishedYear = newYear;
      this.fireSourceDataChangeEvent();
    }
  }

  private get publishedPlace() {
    return this._publishedPlace;
  }

  private set publishedPlace(newPlace: string) {
    if (this.publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this.fireSourceDataChangeEvent();
    }
  }

  private onInitialPublishingYearChange(newYear: number) {
    this.initialPublishingYear = newYear;
  }

  private onPublishedYearChange(newYear: number) {
    this.publishedYear = newYear;
  }

  private onPublishedPlaceChange(newPlace: string) {
    this.publishedPlace = newPlace;
  }

  protected fireSourceDataChangeEvent() {
    this.dataChange.emit(this.getDto());
  }

  public update(data: ExampleSourceBookComponentDto) {
    this.author = data.author;
    this.title = data.title;
    this.page =  data.page;
    this.initialPublishingYear = data.initialPublishingYear;
    this.publishedYear = data.publishedYear;
    this.publishedPlace = data.publishedPlace;
  }

  public getDto(): ExampleSourceBookComponentDto {
    return {
      type: ExampleSourceComponentTypes.book,
      author: this.author,
      title: this.title,
      page: this.page,
      initialPublishingYear: this.initialPublishingYear,
      publishedYear: this.publishedYear,
      publishedPlace: this.publishedPlace,
    };
  }

}
