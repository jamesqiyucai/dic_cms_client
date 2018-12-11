export class SpellingImpl {
  private _region: number;
  private _text: string;
  get region() {
    return this._region;
  }
  get text() {
    return this._text;
  }
  public changeRegion(newRegion: number) {
    this._region = newRegion;
  }
  public changeText(newText: string) {
    this._text = newText;
  }
}
