import {ExampleTranslationDocumentContent} from '../example';

export class ProposalTranslationDocumentImpl extends ExampleTranslationDocumentContent {
  constructor(
    ID: number,
    text: string,
    private _$mark: string
  ) {
    super(ID, text);
  }
  public setID(newID: number) {
    this._ID = newID;
  }
  public set text(newText: string) {
    this._text = newText;
  }
  public get $mark() {
    return this._$mark;
  }
}
