export abstract class AbstractTranslation {
  protected _id: number;
  protected _text: string;
  protected constructor(id: number, text: string) {
    this._id = id;
    this._text = text;
  }
}
