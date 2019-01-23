import {Item} from './item.class';

export class Story extends Item {
  private _summary: string;
  private _text: string;
  constructor(id: number, summary: string, text: string) {
    super(id);
    this._type = 'STORY';
    this._summary = summary;
    this._text = text;
  }
}
