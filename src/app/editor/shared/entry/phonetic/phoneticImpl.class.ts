export class PhoneticImpl {
  private _region: number;
  private _symbol: string;
  get region() {
    return this._region;
  }
  get symbol() {
    return this._symbol;
  }
  public changeRegion(newRegion: number) {
    this._region = newRegion;
  }
  public changeSymbol(newSymbol: string) {
    this._symbol = newSymbol;
  }
}
