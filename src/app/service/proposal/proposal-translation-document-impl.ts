import {ExampleTranslationDocumentContent} from '../example';

export class ProposalTranslationDocumentImpl extends ExampleTranslationDocumentContent {
  private _$mark: string = undefined;
  constructor() {
    super();
  }
  public set ID(newID: number) {
    this._id = newID;
  }
  public get $mark() {
    return this._$mark;
  }
}
