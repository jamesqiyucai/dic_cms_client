export abstract class AbstractSensePosition {
  protected constructor(
    protected _group: number,
    protected _order: number
  ) {}

  get group() {
    return this._group;
  }
  get order() {
    return this._order;
  }
  set group(newGroup: number) {
    this._group = newGroup;
  }
  set order(newOrder: number) {
    this._order = newOrder;
  }
}
