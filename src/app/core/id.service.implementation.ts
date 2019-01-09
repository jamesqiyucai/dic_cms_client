export class IDServiceImplementation {
  private _ID = 0;
  public getID() {
    this._ID = this._ID + 1;
    return this._ID;
  }
}
