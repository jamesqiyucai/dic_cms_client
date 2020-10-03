import {ProposalSourceDocument} from './proposal-source-document';
import {BehaviorSubject} from 'rxjs';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';
import {SourceType} from '../../../../source-type';

export abstract class ProposalSourceDocumentImpl implements ProposalSourceDocument {
  protected _type: SourceType;
  protected _author: string;
  protected _authorObservable: BehaviorSubject<string>;
  protected _title: string;
  protected _titleObservable: BehaviorSubject<string>;

  protected constructor(type: SourceType, author: string, title: string) {
    this._type = type;
    this._author = author;
    this._authorObservable = new BehaviorSubject<string>(author);
    this._title = title;
    this._titleObservable = new BehaviorSubject<string>(title);
  }

  public getType(): SourceType {
    return this._type;
  }

  public get author$() {
    return this._authorObservable.asObservable();
  }

  public setAuthor(newAuthor: string) {
    if (this._author !== newAuthor) {
      this._author = newAuthor;
      this._authorObservable.next(newAuthor);
    }
  }

  public get title$() {
    return this._titleObservable.asObservable();
  }

  public setTitle(newTitle: string) {
    if (this._title !== newTitle) {
      this._title = newTitle;
      this._titleObservable.next(newTitle);
    }
  }
  public abstract mapToRequest(): ProposalSourceResourceContent;
}
