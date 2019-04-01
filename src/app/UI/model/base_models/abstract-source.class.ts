export abstract class AbstractSource {
  protected constructor(protected _author: string, protected _title: string) {}

  public get author() {
    return this._author;
  }

  public set(newAuthor: string) {
    this._author = newAuthor;
  }

  public get title() {
    return this._title;
  }

  public set title(newTitle: string) {
    this._title = newTitle;
  }
}