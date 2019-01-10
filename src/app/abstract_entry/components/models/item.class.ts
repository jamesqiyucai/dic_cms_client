import {List} from 'immutable';

export abstract class Item {
  id: number;
  protected constructor(id: number) {
    this.id = id;
  }
}

