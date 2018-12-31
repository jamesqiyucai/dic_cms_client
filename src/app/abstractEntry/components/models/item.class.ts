import {List} from 'immutable';

export abstract class Item {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

