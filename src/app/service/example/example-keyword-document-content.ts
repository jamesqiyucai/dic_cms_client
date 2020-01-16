import {BehaviorSubject} from 'rxjs';

export abstract class ExampleKeywordDocumentContent {
  private _keyword: string = undefined;
  public readonly $keyword = new BehaviorSubject<string>(undefined);
  public set keyword(newKeyword: string) {
    if (this._keyword !== newKeyword) {
      this._keyword = newKeyword;
      this.$keyword.next(newKeyword);
    }
  }
}
