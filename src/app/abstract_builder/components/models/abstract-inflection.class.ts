export abstract class AbstractInflection {
  protected constructor(protected _type: number, protected _text: string) {}

  get type() {
    return this._type;
  }
  get text() {
    return this._text;
  }
  set type(newType: number) {
    if (newType !== null) {
      this._type = newType;
    }
  }
  set text(newText: string) {
    if (newText !== '') {
      this._text = newText;
    } else {
      alert('Text Shall Not Be Empty');
    }
  }
}
