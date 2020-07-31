import {ProposalDocument} from './proposal-document';
import {ProposalSourceDocument} from './source/proposal-source-document';
import {Resource} from '../../remote_resource/index1';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ProposalSourceHandle} from './source/proposal-source-handle';
import {ProposalKeywordDocument} from './keyword/proposal-keyword-document';
import {List} from 'immutable';
import {ProposalTranslationDocument} from './translation/proposal-translation-document';
import {ProposalStatus} from '../proposal-status';
import {ProposalDocumentBuilder} from './proposal-document-builder';
import {ProposalResourceContent} from '../proposal-resource-content';
import {ProposalSourceFactory} from './source/proposal-source-factory';
import {ProposalSourceFactoryImpl} from './source/proposal-source-factory-impl';
import {ProposalTranslationHandle} from './translation/proposal-translation-handle';
import {ProposalKeywordHandle} from './keyword/proposal-keyword-handle';
import {ProposalTranslationDocumentBuilder} from './translation/proposal-translation-document-builder';
import {ProposalKeywordDocumentBuilder} from './keyword/proposal-keyword-document-builder';
import {ProposalSourceType} from './source/proposal-source-type';
import {ProposalBookSourceDocumentBuilder} from './source/proposal_book_source/proposal-book-source-document-builder';
import {ProposalJournalSourceDocumentBuilder} from './source/proposal_journal_source/proposal-journal-source-document-builder';

export class ProposalDocumentImpl implements ProposalDocument {
  private _ID?: number;
  private _IDObservable?: BehaviorSubject<number>;
  private _exampleID?: number;
  private readonly _initiator: number;
  private _initiatorObservable: BehaviorSubject<number>;
  private readonly _reviewer: number;
  private _reviewerObservable: BehaviorSubject<number>;
  private _status: ProposalStatus;
  private _statusObservable: BehaviorSubject<ProposalStatus>;
  private _version?: number;
  private _versionObservable?: BehaviorSubject<number>;
  private _text: string;
  private _textObservable: BehaviorSubject<string>;
  private _keywords: ProposalKeywordDocument[];
  private _keywordsObservable: BehaviorSubject<List<ProposalKeywordDocument>>;
  private _translations: ProposalTranslationDocument[];
  private _translationsObservable: BehaviorSubject<List<ProposalTranslationDocument>>;
  private _italics: [number, number][];
  private _italicsObservable: BehaviorSubject<List<[number, number]>>;
  private _note: string;
  private _noteObservable: BehaviorSubject<string>;
  private _comment: string;
  private _commentObservable: BehaviorSubject<string>;
  private _source: ProposalSourceDocument | null;
  private _sourceObservable: BehaviorSubject<ProposalSourceHandle | null>;

  private _translationMark: number;
  private _proposalResource: Resource;

  private readonly getTranslationMark: () => string;

  constructor(builder: ProposalDocumentBuilder) {
    if (builder.initiator != null) {
      this._initiator = builder.initiator;
      this._initiatorObservable = new BehaviorSubject<number>(builder.initiator);
    } else {
      throw new Error('Proposal document initiator can not be undefined or null');
    }

    if (builder.reviewer != null) {
      this._reviewer = builder.reviewer;
      this._reviewerObservable = new BehaviorSubject<number>(builder.reviewer);
    } else {
      throw new Error('Proposal reviewer can not be undefined or null');
    }

    if (builder.status != null) {
      this._status = builder.status;
      this._statusObservable = new BehaviorSubject<ProposalStatus>(builder.status);
    } else {
      throw new Error('Proposal status can not be undefined or null');
    }

    if (builder.text != null) {
      this._text = builder.text;
      this._textObservable = new BehaviorSubject<string>(builder.text);
    } else {
      throw new Error('Proposal text can not be undefined or null');
    }

    if (builder.keywords != null) {
      this._keywords = builder.keywords;
      this._keywordsObservable = new BehaviorSubject<List<ProposalKeywordDocument>>(List(builder.keywords));
    } else {
      throw new Error('Proposal keywords can not be undefined or null');
    }

    if (builder.translations != null) {
      this._translations = builder.translations;
      this._translationsObservable = new BehaviorSubject<List<ProposalTranslationDocument>>(List(builder.translations));
    } else {
      throw new Error('Proposal translations can not be undefined or null');
    }

    if (builder.italics != null) {
      this._italics = builder.italics;
      this._italicsObservable = new BehaviorSubject<List<[number, number]>>(List(builder.italics));
    } else {
      throw new Error('Proposal italics can not be undefined or null');
    }

    if (builder.note != null) {
      this._note = builder.note;
      this._noteObservable = new BehaviorSubject<string>(builder.note);
    } else {
      throw new Error('Proposal note can not be undefined or null');
    }

    if (builder.comment != null) {
      this._comment = builder.comment;
      this._commentObservable = new BehaviorSubject<string>(builder.comment);
    } else {
      throw new Error('Proposal comment can not be undefined or null');
    }

    if (builder.source !== undefined) {
      this._source = builder.source;
      this._sourceObservable = new BehaviorSubject<ProposalSourceHandle | null>(builder.source);
    } else {
      throw new Error('Proposal source cannot be undefined');
    }

    if (builder.resource != null) {
      this._proposalResource = builder.resource;
    } else {
      throw new Error('Proposal resource must not be undefined or null');
    }

    this._translationMark = 0;

    this.getTranslationMark = () => {
      this._translationMark += 1;
      return this._translationMark.toString();
    };
  }

  public set ID(newID: number) {
    this._ID = newID;
    this._proposalResource.setID(newID);
  }
  public get initiatorObservable() {
    return this._initiatorObservable.asObservable();
  }
  public get reviewerObservable() {
    return this._reviewerObservable.asObservable();
  }
  public get versionObservable() {
    return this._versionObservable?.asObservable();
  }
  public get statusObservable() {
    return this._statusObservable.asObservable();
  }
  public get textObservable() {
    return this._textObservable.asObservable();
  }
  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this._textObservable.next(newText);
    }
  }
  public get keywordsObservable() {
    return this._keywordsObservable.asObservable();
  }
  public set keywords(newKeywords: List<ProposalKeywordDocument>) {
    if (!newKeywords.equals(List(this._keywords))) {
      this._keywords = newKeywords.toArray();
      this._keywordsObservable.next(newKeywords);
    }
  }
  public get translationsObservable() {
    return this._translationsObservable.asObservable();
  }
  public set translations(newTranslations: List<ProposalTranslationDocument>) {
    if (!newTranslations.equals(List(this._translations))) {
      this._translations = newTranslations.toArray();
      this._translationsObservable.next(newTranslations);
    }
  }
  public get italicsObservable() {
    return this._italicsObservable.asObservable();
  }
  public set italics(newItalics: List<[number, number]>) {
    if (!newItalics.equals(List(this._italics))) {
      this._italics = newItalics.toArray();
      this._italicsObservable.next(newItalics);
    }
  }
  public get noteObservable() {
    return this._noteObservable.asObservable();
  }
  public set note(newNote: string) {
    if (newNote !== this._note) {
      this._note = newNote;
      this._noteObservable.next(newNote);
    }
  }
  public get commentObservable() {
    return this._commentObservable.asObservable();
  }
  public set comment(newComment: string) {
    if (newComment !== this._comment) {
      this._comment = newComment;
      this._commentObservable.next(newComment);
    }
  }
  public get sourceObservable() {
    return this._sourceObservable.asObservable();
  }
  public get source() {
    return this._source;
  }
  public set source(newSource: ProposalSourceDocument | null) {
    this._source = newSource;
    this._sourceObservable.next(newSource);
  }
  public addTranslation(): ProposalTranslationHandle {
    const translationBuilder = new ProposalTranslationDocumentBuilder();
    const translation = translationBuilder.buildBlankTranslationDocument(this.getTranslationMark());
    this._translations.push(translation);
    this._translationsObservable.next(List(this._translations));
    return translation;
  }
  public addKeyword(): ProposalKeywordHandle {
    const keywordBuilder = new ProposalKeywordDocumentBuilder();
    const keyword = keywordBuilder.buildBlankKeywordDocument();
    this._keywords.push(keyword);
    this._keywordsObservable.next(List(this._keywords));
    return keyword;
  }
  public getProposalSourceFactory(): ProposalSourceFactory {
    return new ProposalSourceFactoryImpl();
  }
  public getSource(type: ProposalSourceType): ProposalSourceHandle {
    if (type === ProposalSourceType.Book) {
      const builder = new ProposalBookSourceDocumentBuilder();
      return builder.buildBlankBookSource();
    } else if (type === ProposalSourceType.Journal) {
      const builder = new ProposalJournalSourceDocumentBuilder();
      return builder.buildBlankJournalSource();
    } else {
      throw new Error('unknown source type');
    }
  }

  public save(): Observable<any> {
    const saveStatus = new Subject<any>();
    const body = {
      id: this._ID,
      initiator: this._initiator,
      reviewer: this._reviewer,
      exampleId: this._exampleID,
      version: this._version,
      text: this._text,
      format: {
        italic: this._italics
      },
      translations: this._translations,
      keywords: this._keywords.map(keyword => keyword.keyword),
      note: this._note,
      comment: this._comment,
      source: this._source?.mapToRequest(),
    };
    this._proposalResource.post<any, ProposalResourceContent>(body)
      .subscribe(
        response => {
          this._ID = response.id;
          // tslint:disable-next-line:no-non-null-assertion
          this._IDObservable = new BehaviorSubject<number>(response.id!);
          },
        () => {},
      () => saveStatus.next()
      );
    return saveStatus;
  }

  public approve(): Observable<any> {
    const approveStatus = new Subject();
    this._proposalResource.post(null, '/approve')
      .subscribe(
        () => this._status = ProposalStatus.approved,
        () => {},
      () => approveStatus.next()
      );
    return approveStatus;
  }

  public reject(): Observable<any> {
    const rejectStatus = new Subject();
    this._proposalResource.post(null, '/reject')
      .subscribe(
        () => this._status = ProposalStatus.rejected,
        () => {},
        () => rejectStatus.next()
      );
    return rejectStatus;
  }
}
