import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {ListManipulatorComponentModel} from '../list_manipulator_component';
import {ExampleProposalKeywordComponentModel} from '../keyword_component';
import {ExampleProposalTranslationComponentModel} from '../translation_component';
import {List} from 'immutable';
import {AbstractExampleProposalSourceComponentModel} from '../example_proposal_source_component/abstract-example-proposal-source-component-model';
import {ProposalBookSourceHandle, ProposalHandle, ProposalJournalSourceHandle, ProposalTranslationHandle} from '../../../service/proposal';
import {ProposalKeywordHandle} from '../../../service/proposal/proposal-keyword-handle';
import {ExampleProposalTranslationsListHandle} from '../translation_component';
import {ExampleProposalKeywordListHandle} from '../keyword_component';
import {ProposalSourceType} from '../../../service/proposal';
import {ExampleProposalJournalSourceComponentModel} from '../example_proposal_source_component/journal-source/example-proposal-journal-source-component-model';
import {ExampleProposalBookSourceComponentModel} from '../example_proposal_source_component/book_source/example-proposal-book-source-component-model';
import {italicizeText} from './italicize-text';

export class ExampleProposalEditorComponentModel {
  private readonly _handle: ProposalHandle;
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
  public sourceComponentModel: AbstractExampleProposalSourceComponentModel | null;
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
    this._handle = handle;
    this.keywordsComponentModel = new ListManipulatorComponentModel<ProposalKeywordHandle>(() => {
      return new ExampleProposalKeywordComponentModel(handle.addKeyword());
    }, new ExampleProposalKeywordListHandle(handle));
    this.translationsComponentModel = new ListManipulatorComponentModel<ProposalTranslationHandle>(() => {
      return new ExampleProposalTranslationComponentModel(handle.addTranslation());
    }, new ExampleProposalTranslationsListHandle(handle));
    this._handle.textObservable.subscribe(text => this.text = text);
    this._handle.commentObservable.subscribe(comment => this.comment = comment);
    this._handle.noteObservable.subscribe(note => this.note = note);
    this._handle.italicsObservable.subscribe(italics => this.italics = italics);
    this.sourceComponentModel = null;

    this.text = 'lorem ipsum';
  }
  public get editable() {
    return this._editable;
  }
  public set editable(val) {
    if (this.sourceComponentModel) {
      this.sourceComponentModel.editable = val;
    }
    if (this.keywordsComponentModel) {
      this.keywordsComponentModel.editable = val;
    }
    if (this.translationsComponentModel) {
      this.translationsComponentModel.editable = val;
    }
    this._editable = val;
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._text$.next(this._text);
      this._handle.text = this._text;
    }
  }
  public get text$() {
    return this._text$.asObservable();
  }
  public get italicizedText$() {
    return combineLatest([this.italics$, this.text$])
      .pipe(
        map(([italic, text]) => italicizeText(text, italic.toArray()))
      );
  }
  public set comment(newComment: string) {
    if (this._comment !== newComment) {
      this._comment = newComment;
      this._comment$.next(this._comment);
      this._handle.comment = this._comment;
    }
  }
  public get comment$() {
    return this._comment$.asObservable();
  }
  public set note(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this._note$.next(this._note);
      this._handle.note = this._note;
    }
  }
  public get note$() {
    return this._note$.asObservable();
  }
  public set italics(newItalics: List<[number, number]>) {
    if (!List(this._italics).equals(newItalics)) {
      this._italics = newItalics.toArray();
      this._italics$.next(List(this._italics));
      this._handle.italics = List(this._italics);
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
        this._handle.source = this._handle.getSource(type);
        this.sourceComponentModel = new ExampleProposalBookSourceComponentModel(this._handle.source as ProposalBookSourceHandle);
      } else if (type === ProposalSourceType.Journal) {
        this._handle.source = this._handle.getSource(type);
        this.sourceComponentModel = new ExampleProposalJournalSourceComponentModel(this._handle.source as ProposalJournalSourceHandle);
      }
    }
  }
  public reset(): void {

  }
  public save(): void {
    this._handle.save();
  }
}
