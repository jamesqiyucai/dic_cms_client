import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges} from '@angular/core';
import {AbstractSourceComponent} from '../abstract-source-component';
import {SourceComponent} from '../source-component';
import {ProposalBookSourceHandle} from '../../../../service/proposal';

@Component({
  selector: 'app-example-source-book',
  templateUrl: './example-source-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleSourceBookComponent extends AbstractSourceComponent implements SourceComponent, OnChanges {
  protected _page: number = undefined;
  protected _initialPublishingYear: number = undefined;
  protected _publishedYear: number = undefined;
  protected _publishedPlace = '';
  protected _sourceHandle: ProposalBookSourceHandle = undefined;
  constructor(cdRef: ChangeDetectorRef) {
    super(cdRef);
  }
  @Input() public set sourceHandle(handle: ProposalBookSourceHandle) {
    this._sourceHandle = handle;
  }
  public get $page() {
    return this._sourceHandle.pageObservable;
  }
  public get page() {
    return this._page;
  }
  public set page(newPage: number) {
    if (this.page !== newPage) {
      this._page = newPage;
      this._sourceHandle.page = newPage;
    }
  }
  public get $initialPublishingYear() {
    return this._sourceHandle.initialPublishingYearObservable;
  }
  public get initialPublishingYear() {
    return this._initialPublishingYear;
  }

  public set initialPublishingYear(newYear: number) {
    if (this.initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this._sourceHandle.initialPublishingYear = newYear;
    }
  }
  public get $publishedYear() {
    return this._sourceHandle.publishedYearObservable;
  }
  public get publishedYear() {
    return this._publishedYear;
  }

  public set publishedYear(newYear: number) {
    if (this.publishedYear !== newYear) {
      this._publishedYear = newYear;
      this._sourceHandle.publishedYear = newYear;
    }
  }
  public get $publishedPlace() {
    return this._sourceHandle.publishedPlaceObservable;
  }
  public get publishedPlace() {
    return this._publishedPlace;
  }

  public set publishedPlace(newPlace: string) {
    if (this.publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this._sourceHandle.publishedPlace = newPlace;
    }
  }
  public onPageChange(newPage: string) {
    this.page = Number(newPage);
  }
  public onInitialPublishingYearChange(newYear: number) {
    this.initialPublishingYear = newYear;
  }

  public onPublishedYearChange(newYear: number) {
    this.publishedYear = newYear;
  }

  public onPublishedPlaceChange(newPlace: string) {
    this.publishedPlace = newPlace;
  }

  public ngOnChanges(): void {
    this._sourceHandle.$author.subscribe(author => this.author = author);
    this._sourceHandle.$title.subscribe(title => this.title = title);
    this._sourceHandle.pageObservable.subscribe(page => this.page = page);
    this._sourceHandle.initialPublishingYearObservable.subscribe(initialPublishingYear => this.initialPublishingYear = initialPublishingYear);
    this._sourceHandle.publishedYearObservable.subscribe(publishedYear => this.publishedYear = publishedYear);
    this._sourceHandle.publishedPlaceObservable.subscribe(publishedPlace => this.publishedPlace = publishedPlace);
  }
}
