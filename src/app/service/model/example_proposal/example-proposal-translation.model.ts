export class ExampleProposalTranslationModel {
  private _id: number;
  private _text: string;

  constructor(id: number, text: string) {
    this._id = id;
    this._text = text;
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  set id(newId: number) {
    this._id = newId;
  }

  set text(newText: string) {
    this._text = newText;
  }
}
