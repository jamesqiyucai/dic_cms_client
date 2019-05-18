export abstract class SourceData {
  public type: string;
  public author: string;
  public title: string;

  protected constructor(type: string, author: string, title: string) {
    this.type = type;
    this.author = author;
    this.title = title;
  }
}
