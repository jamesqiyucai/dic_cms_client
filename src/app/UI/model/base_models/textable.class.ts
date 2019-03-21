import {Item} from './item.class';

export abstract class Textable extends Item {
  protected constructor(
    id: number,
    type: string,
    protected _text: string
  ) {
    super(id, type);
  }

  get text() {
    return this._text;
  }

  set text(newText: string) {
    this._text = newText;
  }
}
