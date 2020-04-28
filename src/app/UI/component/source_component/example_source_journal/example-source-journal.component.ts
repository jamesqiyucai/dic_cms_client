import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges} from '@angular/core';
import {AbstractSourceComponent} from '../abstract-source-component';
import {SourceComponent} from '../source-component';
import {ProposalJournalSourceHandle} from '../../../../service/proposal';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleSourceJournalComponent extends AbstractSourceComponent implements SourceComponent, OnChanges {
  protected _page: number = undefined;
  protected _passageTitle = '';
  protected _publishingDate = '';
  protected _sourceHandle: ProposalJournalSourceHandle = undefined;
  @Input() public set sourceHandle(handle: ProposalJournalSourceHandle) {
    this._sourceHandle = handle;
  }
  constructor(cdRef: ChangeDetectorRef) {
    super(cdRef);
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
  public get $passageTitle() {
    return this._sourceHandle.passageTitleObservable;
  }
  public get passageTitle() {
    return this._passageTitle;
  }
  public set passageTitle(newPassageTitle: string) {
    if (this.passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
      this._sourceHandle.passageTitle = newPassageTitle;
    }
  }
  public get $publishingDate() {
    return this._sourceHandle.publishingDateObservable;
  }
  public get publishingDate() {
    return this._publishingDate;
  }

  public set publishingDate(newPublishingDate: string) {
    if (this.publishingDate !== newPublishingDate) {
      this._publishingDate = newPublishingDate;
      this._sourceHandle.publishingDate = newPublishingDate;
    }
  }
  public onPageChange(newPage: string) {
    this.page = Number(newPage);
  }
  public onPassageTitleChange(newTitle: string) {
    this.passageTitle = newTitle;
  }

  public onPublishingDateChange(newDate: string) {
    this.publishingDate = newDate;
  }

  public ngOnChanges(): void {
    this._sourceHandle.$author.subscribe(author => this.author = author);
    this._sourceHandle.$title.subscribe(title => this.title = title);
    this._sourceHandle.passageTitleObservable.subscribe(passageTitle => this.passageTitle);
    this._sourceHandle.publishingDateObservable.subscribe(publishingDate => this.publishingDate = publishingDate);
    this._sourceHandle.pageObservable.subscribe(page => this.page = page);
  }
}
