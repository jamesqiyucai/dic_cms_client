import {ExampleDocumentContent} from '../example';
import {ProposalDocument} from './proposal-document';
import {ProposalSourceDocument} from './proposal-source-document';
import {Resource} from '../remote_resource';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ProposalResourceRequest} from './proposal-resource-request';
import {ProposalResourceResponse} from './proposal-resource-response';
import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceFactory} from './proposal-source-factory';
import {ProposalTranslationHandle} from './proposal-translation-handle';
import {ProposalTranslationDocumentImpl} from './proposal-translation-document-impl';
import {ProposalKeywordDocument} from './proposal-keyword-document';
import {List} from 'immutable';
import {ProposalTranslationDocument} from './proposal-translation-document';
import {ProposalKeywordHandle} from './proposal-keyword-handle';
import {ProposalKeywordDocumentImpl} from './proposal-keyword-document-impl';

export class ProposalDocumentImpl extends ExampleDocumentContent implements ProposalDocument {
  protected _exampleID: number = undefined;
  protected _initiator: number = undefined;
  protected _reviewer: number = undefined;
  protected _status: string = undefined;
  protected _keywords: ProposalKeywordDocument[] = [];
  protected _translations: ProposalTranslationDocument[] = [];
  protected _source: ProposalSourceDocument = undefined;
  protected _proposalResource: Resource;
  private sourceFactory = new ProposalSourceFactory();
  public readonly $exampleID = new BehaviorSubject<number>(undefined);
  public readonly $reviewer = new BehaviorSubject<number>(undefined);
  public readonly $initiator = new BehaviorSubject<number>(undefined);
  public readonly $source = new BehaviorSubject<ProposalSourceHandle>(undefined);
  public readonly $status = new BehaviorSubject<string>(undefined);
  public readonly $keywords = new BehaviorSubject<List<ProposalKeywordDocument>>(List());
  public readonly $translations = new BehaviorSubject<List<ProposalTranslationDocument>>(List());
  constructor(resource: Resource) {
    super();
    this._proposalResource = resource;
  }
  private mapToProposalRequest(): ProposalResourceRequest {
    const proposalRequest: ProposalResourceRequest = {
      id: this._ID,
      initiator: this._initiator,
      reviewer: this._reviewer,
      status: this._status,
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
      source: this._source.mapToRequest(),
    };
    return proposalRequest;
  }
  public get source() {
    return this._source;
  }
  public set source(newSource: ProposalSourceDocument) {
    this._source = newSource;
    this.$source.next(newSource);
  }
  public setID(newID: number): any {
    this._ID = newID;
    this._proposalResource.setID(newID);
  }
  public set exampleID(newID: number) {
    this._exampleID = newID;
  }
  public set initiator(newInitiator: number) {
    this._initiator = newInitiator;
  }
  public set reviewer(newReviewer: number) {
    this._reviewer = newReviewer;
  }
  public set status(newStatus: string) {
    this._status = newStatus;
  }
  public get keywords() {
    return List(this._keywords);
  }
  public set keywords(newKeywords: List<ProposalKeywordDocument>) {
    if (!newKeywords.equals(List(this._keywords))) {
      this._keywords = newKeywords.toArray();
      this.$keywords.next(newKeywords);
    }
  }
  public get translations() {
    return List(this._translations);
  }
  public set translations(newTranslations: List<ProposalTranslationDocument>) {
    if (!newTranslations.equals(List(this._translations))) {
      this._translations = newTranslations.toArray();
      this.$translations.next(newTranslations);
    }
  }
  public changeSource(toType: string): any {
    if (toType === '') {
      this.source = null;
    } else {
      this.source = this.sourceFactory.createSource(toType);
    }
  }
  public createTranslation(): ProposalTranslationHandle {
    const handle = new ProposalTranslationDocumentImpl();
    handle.text = '';
    return handle;
  }
  public createKeyword(): ProposalKeywordHandle {
    const handle = new ProposalKeywordDocumentImpl();
    handle.keyword = '';
    return handle;
  }

  public save(): Observable<any> {
    const saveStatus = new Subject<any>();
    const body = this.mapToProposalRequest();
    this._proposalResource.post<ProposalResourceResponse>(body)
      .subscribe(
        response => this.setID(response.id),
        err => {},
      () => saveStatus.next()
      );
    return saveStatus;
  }
  public approve(): Observable<any> {
    const approveStatus = new Subject();
    this._proposalResource.post(null, '/approve')
      .subscribe(
        response => this.status = 'approved',
        err => {},
      () => approveStatus.next()
      );
    return approveStatus;
  }
  public reject(): Observable<any> {
    const rejectStatus = new Subject();
    this._proposalResource.post(null, '/reject')
      .subscribe(
        response => this.status = 'rejected',
        err => {},
        () => rejectStatus.next()
      );
    return rejectStatus;
  }
}
