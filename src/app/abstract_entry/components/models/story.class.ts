import {Item} from './item.class';

export class Story extends Item {
  summary: string;
  text: string;
  constructor(id: number, summary: string, text: string) {
    super(id);
    this.summary = summary;
    this.text = text;
  }
}
