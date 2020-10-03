import {ProposalKeywordDocument} from './proposal-keyword-document';
import {BehaviorSubject} from 'rxjs';
import {ProposalKeywordDocumentBuilder} from './proposal-keyword-document-builder';

export class ProposalKeywordDocumentImpl implements ProposalKeywordDocument {
  private _keyword: string;
  private _keywordObservable: BehaviorSubject<string>;
  constructor(builder: ProposalKeywordDocumentBuilder) {
    if (builder.keyword != null) {
      this._keyword = builder.keyword;
      this._keywordObservable = new BehaviorSubject<string>(builder.keyword);
    } else {
      throw new Error('Keyword must not be null or undefined');
    }
  }
  public setKeyword(newKeyword: string) {
    if (this._keyword !== newKeyword) {
      this._keyword = newKeyword;
      this._keywordObservable.next(newKeyword);
    }
  }
  public get keyword$() {
    return this._keywordObservable.asObservable();
  }
}
