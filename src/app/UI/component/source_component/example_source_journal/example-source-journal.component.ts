import {Component, Input, OnInit} from '@angular/core';
import {AbstractSourceComponent} from '../abstract-source-component';
import {SourceComponent} from '../source-component';
import {ProposalJournalSourceHandle} from '../../../../service/proposal';

@Component({
  selector: 'app-example-source-newspaper',
  templateUrl: './example-source-journal.component.html',
})
export class ExampleSourceJournalComponent extends AbstractSourceComponent implements SourceComponent, OnInit {
  protected _page: number;
  protected _passageTitle;
  protected _publishingDate;
  protected _sourceHandle: ProposalJournalSourceHandle;
  @Input() public set sourceHandle(handle: ProposalJournalSourceHandle) {
    this._sourceHandle = handle;
  }
  constructor() {
    super();
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
  private get passageTitle() {
    return this._passageTitle;
  }

  private set passageTitle(newPassageTitle: string) {
    if (this.passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
      this._sourceHandle.passageTitle = newPassageTitle;
    }
  }

  private get publishingDate() {
    return this._publishingDate;
  }

  private set publishingDate(newPublishingDate: string) {
    if (this.publishingDate !== newPublishingDate) {
      this._publishingDate = newPublishingDate;
      this._sourceHandle.publishingDate = newPublishingDate;
    }
  }
  private onPageChange(newPage: string) {
    this.page = Number(newPage);
  }
  private onPassageTitleChange(newTitle: string) {
    this.passageTitle = newTitle;
  }

  private onPublishingDateChange(newDate: string) {
    this.publishingDate = newDate;
  }

  public ngOnInit(): void {
    this._sourceHandle.$author.subscribe(author => this.author = author);
    this._sourceHandle.$title.subscribe(title => this.title = title);
    this._sourceHandle.$passageTitle.subscribe(passageTitle => this.passageTitle);
    this._sourceHandle.$publishingDate.subscribe(publishingDate => this.publishingDate = publishingDate);
    this._sourceHandle.$page.subscribe(page => this.page = page);
  }
}
