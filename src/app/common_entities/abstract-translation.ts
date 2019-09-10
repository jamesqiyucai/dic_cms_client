export abstract class AbstractTranslation {
  protected _id: number;
  protected _text: string;
  protected constructor(id: number, text: string) {
    this._id = id;
    this._text = text;
  }
  protected get id() {
    return this._id;
  }
  protected get text() {
    return this._text;
  }
  protected changeID(newID: number) {
    if (this._id !== newID) {
      this._id = newID;
    } else {
      console.log(`assigning the same id for translation ${this._id}`);
    }
  }
  protected changeText(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
    } else {
      console.log(`assigning a same text for translation ${this._id}`);
    }
  }
}
