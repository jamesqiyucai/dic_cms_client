export abstract class ExampleSourceDocumentContent {
  protected constructor(private _type: string, public author: string, public title: string) {}
  public getType() {
    return this._type;
  }
}
