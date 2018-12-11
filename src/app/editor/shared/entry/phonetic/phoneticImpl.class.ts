export class PhoneticImpl {
  private _region: number;
  private _symbol: string;
  get region() {
    return this._region;
  }
  get symbol() {
    return this._symbol;
  }
  constructor(region: number, symbol: string) {
    this._region = region;
    this._symbol = symbol;
  }
  public changeRegion(newRegion: number) {
    this._region = newRegion;
  }
  public changeSymbol(newSymbol: string) {
    this._symbol = newSymbol;
  }
}
