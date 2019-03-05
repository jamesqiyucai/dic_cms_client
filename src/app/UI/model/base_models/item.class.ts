export abstract class Item {
  protected constructor(
    protected readonly _id: number,
    protected readonly _type: string
    ) {}

  get type() {
    return this._type;
  }
  get ID() {
    return this._id;
  }
}

