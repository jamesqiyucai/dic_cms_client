import {ProposalSourceDocument} from './proposal-source-document';
import {BehaviorSubject} from 'rxjs';
import {ProposalSourceType} from './proposal-source-type';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export abstract class ProposalSourceDocumentImpl implements ProposalSourceDocument {
  protected _type: ProposalSourceType;
  protected _author: string;
  protected _authorObservable: BehaviorSubject<string>;
  protected _title: string;
  protected _titleObservable: BehaviorSubject<string>;

  protected constructor(type: ProposalSourceType, author: string, title: string) {
    this._type = type;
    this._author = author;
    this._authorObservable = new BehaviorSubject<string>(author);
    this._title = title;
    this._titleObservable = new BehaviorSubject<string>(title);
  }

  public getType(): ProposalSourceType {
    return this._type;
  }

  public get authorObservable() {
    return this._authorObservable.asObservable();
  }

  public set author(newAuthor: string) {
    if (this._author !== newAuthor) {
      this._author = newAuthor;
      this._authorObservable.next(newAuthor);
    }
  }

  public get titleObservable() {
    return this._titleObservable.asObservable();
  }

  public set title(newTitle: string) {
    if (this._title !== newTitle) {
      this._title = newTitle;
      this._titleObservable.next(newTitle);
    }
  }
  public abstract mapToRequest(): ProposalSourceResourceContent;
}
