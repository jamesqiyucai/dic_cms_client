import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {ListManipulatorComponentModelImpl} from '../list_manipulator';
import {ExampleProposalKeywordComponentModel, ExampleProposalKeywordListHandle} from '../keyword_component';
import {ExampleProposalTranslationComponentModel, ExampleProposalTranslationsListHandle} from '../translation_component';
import {List} from 'immutable';
import {
  ProposalBookSourceHandle,
  ProposalEditorHandle,
  ProposalJournalSourceHandle,
  ProposalSourceHandle,
  ProposalTranslationHandle
} from '../../../service/proposal';
import {ProposalKeywordHandle} from '../../../service/proposal/document/keyword/proposal-keyword-handle';
import {ExampleProposalEditorJournalSourceModelImpl} from '../example_proposal_editor_source/journal-source/example-proposal-editor-journal-source-model-impl';
import {ExampleProposalEditorBookSourceModelImpl} from '../example_proposal_editor_source/book_source/example-proposal-editor-book-source-model-impl';
import {italicizeText} from './italicize-text';
import {ExampleProposalEditorModel} from './example-proposal-editor-model';
import {ListManipulatorModel} from '../list_manipulator/list-manipulator-model';
import {SourceType} from '../../../source-type';
import {ExampleProposalEditorSourceModel} from '../example_proposal_editor_source/example-proposal-editor-source-model';

export class ExampleProposalEditorModelImpl implements ExampleProposalEditorModel {
  private readonly _handle: ProposalEditorHandle;
  private _editable: boolean;
  private _text: string;
  private readonly _text$: BehaviorSubject<string>;
  private _comment: string;
  private readonly _comment$: BehaviorSubject<string>;
  private _note: string;
  private readonly _note$: BehaviorSubject<string>;
  private _italics: [number, number][];
  private readonly _italics$: BehaviorSubject<List<[number, number]>>;
  private _sourceModel: ExampleProposalEditorSourceModel | null;
  private readonly _sourceModel$: BehaviorSubject<ExampleProposalEditorSourceModel | null>;
  public readonly keywordsModel: ListManipulatorModel<ProposalKeywordHandle>;
  public readonly translationsModel: ListManipulatorModel<ProposalTranslationHandle>;
  constructor(handle: ProposalEditorHandle) {
    this._editable = true;
    this._text = '';
    this._text$ = new BehaviorSubject<string>(this._text);
    this._comment = '';
    this._comment$ = new BehaviorSubject<string>(this._comment);
    this._note = '';
    this._note$ = new BehaviorSubject<string>(this._note);
    this._italics = [];
    this._italics$ = new BehaviorSubject<List<[number, number]>>(List(this._italics));
    this._sourceModel = null;
    this._sourceModel$ = new BehaviorSubject<ExampleProposalEditorSourceModel | null>(null);
    this._handle = handle;
    this.keywordsModel = new ListManipulatorComponentModelImpl<ProposalKeywordHandle>(() => {
      return new ExampleProposalKeywordComponentModel(handle.addKeyword());
    }, new ExampleProposalKeywordListHandle(handle));
    this.translationsModel = new ListManipulatorComponentModelImpl<ProposalTranslationHandle>(() => {
      return new ExampleProposalTranslationComponentModel(handle.addTranslation());
    }, new ExampleProposalTranslationsListHandle(handle));
    this._handle.text$.subscribe(text => this.setText(text));
    this._handle.comment$.subscribe(comment => this.setComment(comment));
    this._handle.note$.subscribe(note => this.setNote(note));
    this._handle.italics$.subscribe(italics => this.setItalics(italics));
    this._handle.source$.subscribe(source => {
      if (source) {
        this._sourceModel = this.getSourceModelByHandle(source);
      } else {
        this._sourceModel = null;
      }
    });

    this.setText('lorem ipsum');
  }
  private getSourceModelByHandle(handle: ProposalSourceHandle): ExampleProposalEditorSourceModel {
    if (handle.getType() === SourceType.Book) {
      return new ExampleProposalEditorBookSourceModelImpl(this._handle.currentSource as ProposalBookSourceHandle);
    } else if (handle.getType() === SourceType.Journal) {
      return new ExampleProposalEditorJournalSourceModelImpl(this._handle.currentSource as ProposalJournalSourceHandle);
    } else {
      throw new Error('Unrecognized source!');
    }
  }
  public get editable() {
    return this._editable;
  }
  public enableEditing() {
    if (this._sourceModel) {
      this._sourceModel.enableEditing();
    }
    if (this.keywordsModel) {
      this.keywordsModel.enableEditing();
    }
    if (this.translationsModel) {
      this.translationsModel.enableEditing();
    }
    this._editable = true;
  }
  public disableEditing() {
    if (this._sourceModel) {
      this._sourceModel.disableEditing();
    }
    if (this.keywordsModel) {
      this.keywordsModel.disableEditing();
    }
    if (this.translationsModel) {
      this.translationsModel.disableEditing();
    }
    this._editable = false;
  }

  public setText(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._text$.next(this._text);
      this._handle.setText(this._text);
    }
  }
  private get text$() {
    return this._text$;
  }
  public get formattedText$() {
    return combineLatest([this.italics$, this.text$])
      .pipe(
        map(([italic, text]) => italicizeText(text, italic.toArray()))
      );
  }
  public setComment(newComment: string) {
    if (this._comment !== newComment) {
      this._comment = newComment;
      this._comment$.next(this._comment);
      this._handle.setComment(this._comment);
    }
  }
  public get comment$() {
    return this._comment$;
  }
  public setNote(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this._note$.next(this._note);
      this._handle.setNote(this._note);
    }
  }
  public get note$() {
    return this._note$;
  }
  public setItalics(newItalics: List<[number, number]>) {
    if (!List(this._italics).equals(newItalics)) {
      this._italics = newItalics.toArray();
      this._italics$.next(List(this._italics));
      this._handle.setItalics(List(this._italics));
    }
  }
  public get italics$() {
    return this._italics$;
  }
  public get sourceModel$() {
    return this._sourceModel$;
  }
  public setSource(type: SourceType | null) {
    // tslint:disable-next-line:triple-equals
    if (type != this._sourceModel?.type) {
      if (type == null) {
        this._handle.setSource(null);
        this._sourceModel = null;
      } else {
        this._handle.setSource(this._handle.getNewSource(type));
        if (this._handle.currentSource) {
          this._sourceModel = this.getSourceModelByHandle(this._handle.currentSource);
        } else {
          throw new Error('Source handle should not be null');
        }
      }
    }
  }
  public submit(): any {

  }
  public save(): void {
    this._handle.save();
  }
}
