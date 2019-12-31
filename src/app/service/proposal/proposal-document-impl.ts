import {ExampleDocumentContent} from '../example';
import {ProposalDocument} from './proposal-document';
import {ProposalSourceDocument} from './proposal-source-document';
import {ExampleTranslationDocument} from '../example/example-translation-document';
import {Resource} from '../remote_resource';
import {Observable, Subject} from 'rxjs';
import {ProposalResourceRequest} from './proposal-resource-request';
import {ProposalSourceResourceRequest} from './proposal-source-resource-request';
import {ProposalBookSourceResourceRequest} from './proposal-book-source-resource-request';
import {ProposalBookSourceDocument} from './proposal-book-source-document';
import {ProposalJournalSourceDocument} from './proposal-journal-source-document';
import {ProposalJournalSourceResourceRequest} from './proposal-journal-source-resource-request';
import {ProposalResourceResponse} from './proposal-resource-response';

export class ProposalDocumentImpl extends ExampleDocumentContent implements ProposalDocument {
  protected _source: ProposalSourceDocument;
  constructor(
    private _exampleID: number,
    private _initiator: number,
    private _reviewer: number,
    private _status: string,
    private _proposalResource: Resource,
    ID: number,
    version: number,
    text: string,
    keywords: string[],
    translations: ExampleTranslationDocument[],
    italics: [number, number][],
    source: ProposalSourceDocument,
    comment: string,
    note: string
  ) {
    super(ID, version, text, keywords, translations, italics, comment, note);
  }
  private getProposalRequest(): ProposalResourceRequest {
    let sourceRequest: ProposalSourceResourceRequest;
    if (this.source.getType() === 'book') {
      const source = <ProposalBookSourceDocument>this.source;
      const bookSourceRequest: ProposalBookSourceResourceRequest = {
        type: source.getType(),
        author: source.author,
        title: source.title,
        page: source.page,
        initialPublishingYear: source.initialPublishingYear,
        publishedYear: source.publishedYear,
        publishedPlace: source.publishedPlace
      };
      sourceRequest = bookSourceRequest;
    } else if (this.source.getType() === 'journal') {
      const source = <ProposalJournalSourceDocument>this.source;
      const journalSourceRequest: ProposalJournalSourceResourceRequest = {
        type: source.getType(),
        author: source.author,
        title: source.title,
        page: source.page,
        passageTitle: source.passageTitle,
        publishingDate: source.publishingDate
      };
      sourceRequest = journalSourceRequest;
    }
    const proposalRequest: ProposalResourceRequest = {
      id: this.ID,
      initiator: this.initiator,
      reviewer: this.reviewer,
      status: this.status,
      exampleId: this.exampleID,
      version: this.version,
      text: this.text,
      format: {
        italic: this.italics.toArray()
      },
      translations: this.translations.toArray(),
      keywords: this.keywords.toArray(),
      note: this.note,
      comment: this.comment,
      source: sourceRequest,
    };
    return proposalRequest;
  }
  public get source() {
    return this._source;
  }
  public set source(newSource: ProposalSourceDocument) {
    this._source = newSource;
  }
  public setID(newID: number): any {
    this._ID = newID;
    this._proposalResource.setID(newID);
  }
  public get exampleID() {
    return this._exampleID;
  }
  public set exampleID(newID: number) {
    this._exampleID = newID;
  }
  public get initiator() {
    return this._initiator;
  }
  public set initiator(newInitiator: number) {
    this._initiator = newInitiator;
  }
  public get reviewer() {
    return this._reviewer;
  }
  public set reviewer(newReviewer: number) {
    this._reviewer = newReviewer;
  }
  public get status() {
    return this._status;
  }
  public set status(newStatus: string) {
    this._status = newStatus;
  }
  public save(): Observable<any> {
    const saveStatus = new Subject<any>();
    const body = this.getProposalRequest();
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
