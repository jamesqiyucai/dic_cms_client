import {ExampleSourceDocumentContent} from './example-source-document-content';
import {Subject} from 'rxjs';

export abstract class ExampleJournalSourceDocumentContent extends ExampleSourceDocumentContent {
  public readonly $page = new Subject<number>();
  public readonly $passageTitle = new Subject<string>();
  public readonly $publishingDate = new Subject<string>();
  constructor(
    author: string,
    title: string,
    protected _page: number,
    protected _passageTitle: string,
    protected _publishingDate: string
  ) {
    super('journal', author, title);
  }
  public get page() {
    return this._page;
  }
  public set page(newPage: number) {
    if (this._page !== newPage) {
      this._page = newPage;
      this.$page.next(newPage);
    }
  }
  public get passageTitle() {
    return this._passageTitle;
  }
  public set passageTitle(newPassageTitle: string) {
    if (this._passageTitle !== newPassageTitle) {
      this._passageTitle = newPassageTitle;
      this.$passageTitle.next(newPassageTitle);
    }
  }
  public get publishingDate() {
    return this._publishingDate;
  }
  public set publishingDate(newPublishingDate: string) {
    if (this._publishingDate !== newPublishingDate) {
      this._publishingDate = newPublishingDate;
      this.$publishingDate.next(newPublishingDate);
    }
  }
}
