export abstract class AbstractPhonetic {
  protected constructor(protected _region: number, protected _symbol: string) {
  }

  get region() {
    const temp = this._region
    return temp;
  }
  get symbol() {
    return this._symbol;
  }
  set region(newRegion: number) {
    if (newRegion !== null) {
      this._region = newRegion;
    } else {
      alert('You Have To Select A Region');
    }
  }
  set symbol(newSymbol: string) {
    if (newSymbol !== '') {
      this._symbol = newSymbol;
    } else {
      alert('Symbol Shall Not Be Empty');
    }
  }
}
