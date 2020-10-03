import {ProposalTranslationDocument} from './proposal-translation-document';
import {BehaviorSubject} from 'rxjs';
import {ProposalTranslationDocumentBuilder} from './proposal-translation-document-builder';

export class ProposalTranslationDocumentImpl implements ProposalTranslationDocument {
  private _text: string;
  private _textObservable: BehaviorSubject<string>;
  private _$mark: string;
  private _$markObservable: BehaviorSubject<string>;

  constructor(builder: ProposalTranslationDocumentBuilder) {
    if (builder.text != null) {
      this._text = builder.text;
      this._textObservable = new BehaviorSubject<string>(builder.text);
    } else {
      throw new Error('Text shall not be null or undefined in proposal translation');
    }
    if (builder.$mark != null) {
      this._$mark = builder.$mark;
      this._$markObservable = new BehaviorSubject<string>(builder.$mark);
    } else {
      throw new Error('Mark shall not be null or undefined in proposal translation');
    }
  }
  public get translation$() {
    return this._textObservable.asObservable();
  }
  public setTranslation(newTranslation: string) {
    if (this._text !== newTranslation) {
      this._text = newTranslation;
      this._textObservable.next(newTranslation);
    }
  }
  public get $markObservable() {
    return this._$markObservable.asObservable();
  }
  public set $mark(newMark: string) {
    if (this._$mark !== newMark) {
      this._$mark = newMark;
      this._$markObservable.next(newMark);
    }
  }
}
