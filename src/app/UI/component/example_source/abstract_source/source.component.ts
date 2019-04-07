import {AbstractSource} from '../../../model/base_models/abstract-source.class';

export abstract class SourceComponent {
  protected sourceInfo: AbstractSource;

  abstract deleteSource(): void;

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

  public abstract getInfo(): any;
}
