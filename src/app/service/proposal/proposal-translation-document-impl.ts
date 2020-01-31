import {ExampleTranslationDocumentContent} from '../example';
import {ProposalTranslationDocument} from './proposal-translation-document';

export class ProposalTranslationDocumentImpl extends ExampleTranslationDocumentContent implements ProposalTranslationDocument{
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
