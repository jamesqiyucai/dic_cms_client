import {AbstractSource} from '../../../model/base_models/abstract-source.class';

export abstract class SourceComponent {
  protected _editingEnabled: boolean;
  protected sourceInfo: AbstractSource;

  abstract fillData(
    author: string,
    title: string,
    page: number,
    initialPublishingYear?: number,
    publishedYear?: number,
    publishedPlace?: string,
    passageTitle?: string,
    publishingDate?: string
  ): void;

  abstract deleteSource(): void;

  abstract getData(): any;

  public get editingEnabled() {
    return this._editingEnabled;
  }

  public enableEditing() {
    this._editingEnabled = true;
  }

  public disableEditing() {
    this._editingEnabled = false;
  }

  public get author() {
    return this.sourceInfo.author;
  }

  public changeAuthor(newAuthor: string) {
    this.sourceInfo.author = newAuthor;
  }

  public get title() {
    return this.sourceInfo.title;
  }

  public changeTitle(newTitle: string) {
    this.sourceInfo.title = newTitle;
  }
}
