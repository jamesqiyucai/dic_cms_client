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
    }
  }

  private get publishedYear() {
    return this._publishedYear;
  }

  private set publishedYear(newYear: number) {
    if (this.publishedYear !== newYear) {
      this._publishedYear = newYear;
    }
  }

  private get publishedPlace() {
    return this._publishedPlace;
  }

  private set publishedPlace(newPlace: string) {
    if (this.publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
    }
  }

  private onInitialPublishingYearChange(newYear: number) {
    this.initialPublishingYear = newYear;
    this.fireSourceDataChangeEvent();
  }

  private onPublishedYearChange(newYear: number) {
    this.publishedYear = newYear;
    this.fireSourceDataChangeEvent();
  }

  private onPublishedPlaceChange(newPlace: string) {
    this.publishedPlace = newPlace;
    this.fireSourceDataChangeEvent();
  }

  protected fireSourceDataChangeEvent() {
    this.dataChange.emit(this.getDto());
  }

  public update(data: ExampleSourceBookComponentDto) {
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
    if (this.initialPublishingYear !== data.initialPublishingYear) {
      this.initialPublishingYear = data.initialPublishingYear;
      updatedAnything = true;
    }
    if (this.publishedYear !== data.publishedYear) {
      this.publishedYear = data.publishedYear;
      updatedAnything = true;
    }
    if (this.publishedPlace !== data.publishedPlace) {
      this.publishedPlace = data.publishedPlace;
      updatedAnything = true;
    }
    if (updatedAnything === true) {
      this.fireSourceDataChangeEvent();
    }
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
