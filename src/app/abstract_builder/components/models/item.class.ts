import {List} from 'immutable';

export abstract class Item {
  readonly _id: number;
  protected _type: string;

  protected constructor(id: number) {
    this._id = id;
  }
  public getItemType() {
    return this._type;
  }

  get ID() {
    return this._id;
  }
}

