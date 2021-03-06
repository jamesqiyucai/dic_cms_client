import {BehaviorSubject, Subject} from 'rxjs';

export abstract class ExampleSourceDocumentContent {
  public readonly authorObservable = new BehaviorSubject<string>('');
  public readonly titleObservable =  new BehaviorSubject<string>('');
  protected constructor(private _type: string, private _author: string, private _title: string) {}
  public getType() {
    return this._type;
  }
  public get author() {
    return this._author;
  }
  public set author(newAuthor) {
    if (this._author !== newAuthor) {
      this._author = newAuthor;
      this.authorObservable.next(newAuthor);
    }
  }
  public get title() {
    return this._title;
  }
  public set title(newTitle: string) {
    if (this._title !== newTitle) {
      this._title = newTitle;
      this.titleObservable.next(newTitle);
    }
  }
}
