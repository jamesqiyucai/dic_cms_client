import {BehaviorSubject} from 'rxjs';
import {ListManipulatorComponentModel} from '../list_manipulator_component/list-manipulator-component-model';
import {KeywordComponentModel} from '../keyword_component/keyword-component-model';
import {TranslationComponentModel} from '../translation_component/translation-component-model';
import {List} from 'immutable';
import {AbstractProposalSourceComponentModel} from '../source_component/abstract-proposal-source-component-model';
import {ProposalBookSourceHandle, ProposalHandle, ProposalJournalSourceHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {ProposalKeywordHandle} from '../../../service/proposal/proposal-keyword-handle';
import {ProposalTranslationsListHandle} from '../list_manipulator_component/proposal-translations-list-handle';
import {ProposalKeywordListHandle} from '../list_manipulator_component/proposal-keyword-list-handle';
import {ProposalSourceType} from '../../../service/proposal/proposal-source-type';
import {ProposalJournalSourceComponentModel} from '../source_component/example_source_journal/proposal-journal-source-component-model';
import {ProposalBookSourceComponentModel} from '../source_component/example_source_book/proposal-book-source-component-model';

export class ExampleProposalEditorComponentModel {
  private _handle: ProposalHandle;
  private _editable: boolean;
  private _text: string;
  private readonly _text$: BehaviorSubject<string>;
  private _comment: string;
  private readonly _comment$: BehaviorSubject<string>;
  private _note: string;
  private readonly _note$: BehaviorSubject<string>;
  private _italics: [number, number][];
  private readonly _italics$: BehaviorSubject<List<[number, number]>>;
  public keywordsComponentModel: ListManipulatorComponentModel<ProposalKeywordHandle>;
  public translationsComponentModel: ListManipulatorComponentModel<ProposalTranslationHandle>;
  public sourceComponentModel: AbstractProposalSourceComponentModel | null;
  constructor(handle: ProposalHandle) {
    this._editable = true;
    this._text = '';
    this._text$ = new BehaviorSubject<string>(this._text);
    this._comment = '';
    this._comment$ = new BehaviorSubject<string>(this._comment);
    this._note = '';
    this._note$ = new BehaviorSubject<string>(this._note);
    this._italics = [];
    this._italics$ = new BehaviorSubject<List<[number, number]>>(List(this._italics));
    // todo add the initialization logic for the three sub models
    this.keywordsComponentModel = new ListManipulatorComponentModel<ProposalKeywordHandle>(new ProposalKeywordListHandle(handle), () => {
      return new KeywordComponentModel(handle.addKeyword());
    });
    this.translationsComponentModel = new ListManipulatorComponentModel<ProposalTranslationHandle>(new ProposalTranslationsListHandle(handle), () => {
      return new TranslationComponentModel(handle.addTranslation());
    });
    this.sourceComponentModel = null;
    this._handle = handle;
    this._handle.textObservable.subscribe(text => this.text = text);
    this._handle.commentObservable.subscribe(comment => this.comment = comment);
    this._handle.noteObservable.subscribe(note => this.note = note);
    this._handle.italicsObservable.subscribe(italics => this.italics = italics);
  }
  public get editable() {
    return this._editable;
  }
  public set editable(val) {
    if (this.sourceComponentModel) {
      this.sourceComponentModel.editable = val;
    }
    this._editable = val;
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._text$.next(this._text);
    }
  }
  public get text$() {
    return this._text$.asObservable();
  }
  public set comment(newComment: string) {
    if (this._comment !== newComment) {
      this._comment = newComment;
      this._comment$.next(this._comment);
    }
  }
  public get comment$() {
    return this._comment$.asObservable();
  }
  public set note(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this._note$.next(this._note);
    }
  }
  public get note$() {
    return this._note$.asObservable();
  }
  public set italics(newItalics: List<[number, number]>) {
    if (!List(this._italics).equals(newItalics)) {
      this._italics = newItalics.toArray();
      this._italics$.next(List(this._italics));
    }
  }
  public get italics$() {
    return this._italics$.asObservable();
  }
  public switchSource(type: ProposalSourceType | null) {
    // tslint:disable-next-line:triple-equals
    if (type != this.sourceComponentModel?.type) {
      if (type == null) {
        this._handle.source = null;
        this.sourceComponentModel = null;
      } else if (type === ProposalSourceType.Book) {
        this._handle.switchSource(type);
        // tslint:disable-next-line:no-non-null-assertion
        this.sourceComponentModel = new ProposalBookSourceComponentModel(<ProposalBookSourceHandle>this._handle.source!);
      } else if (type === ProposalSourceType.Journal) {
        this._handle.switchSource(type);
        // tslint:disable-next-line:no-non-null-assertion
        this.sourceComponentModel = new ProposalJournalSourceComponentModel(<ProposalJournalSourceHandle>this._handle.source!);
      }
    }
  }
  public reset(): void {}
  public save(): void {
    this.keywordsComponentModel.save();
    this.translationsComponentModel.save();
  }
}
