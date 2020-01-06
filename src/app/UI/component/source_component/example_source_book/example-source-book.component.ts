import {Component, Input, OnInit} from '@angular/core';
import {AbstractSourceComponent} from '../abstract-source-component';
import {SourceComponent} from '../source-component';
import {ProposalBookSourceHandle} from '../../../../service/proposal';

@Component({
  selector: 'app-example-source-book',
  templateUrl: './example-source-book.component.html'
})
export class ExampleSourceBookComponent extends AbstractSourceComponent implements SourceComponent, OnInit {
  protected _page: number;
  protected _initialPublishingYear: number;
  protected _publishedYear: number;
  protected _publishedPlace = null;
  protected _sourceHandle: ProposalBookSourceHandle;
  constructor() {
    super();
  }
  @Input() public set sourceHandle(handle: ProposalBookSourceHandle) {
    this._sourceHandle = handle;
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
  private get initialPublishingYear() {
    return this._initialPublishingYear;
  }

  private set initialPublishingYear(newYear: number) {
    if (this.initialPublishingYear !== newYear) {
      this._initialPublishingYear = newYear;
      this._sourceHandle.initialPublishingYear = newYear;
    }
  }

  private get publishedYear() {
    return this._publishedYear;
  }

  private set publishedYear(newYear: number) {
    if (this.publishedYear !== newYear) {
      this._publishedYear = newYear;
      this._sourceHandle.publishedYear = newYear;
    }
  }

  private get publishedPlace() {
    return this._publishedPlace;
  }

  private set publishedPlace(newPlace: string) {
    if (this.publishedPlace !== newPlace) {
      this._publishedPlace = newPlace;
      this._sourceHandle.publishedPlace = newPlace;
    }
  }
  private onPageChange(newPage: string) {
    this.page = Number(newPage);
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

  public ngOnInit(): void {
    this._sourceHandle.$author.subscribe(author => this.author = author);
    this._sourceHandle.$title.subscribe(title => this.title = title);
    this._sourceHandle.$page.subscribe(page => this.page = page);
    this._sourceHandle.$initialPublishingYear.subscribe(initialPublishingYear => this.initialPublishingYear = initialPublishingYear);
    this._sourceHandle.$publishedYear.subscribe(publishedYear => this.publishedYear = publishedYear);
    this._sourceHandle.$publishedPlace.subscribe(publishedPlace => this.publishedPlace = publishedPlace);
  }
}