import {ProposalDocumentHolder} from './proposal-document-holder';
import {ProposalDocument} from './proposal-document';
import {Observable, Subject} from 'rxjs';
import {RemoteResourceFactory, SessionOption} from '../remote_resource/index1';
import {ProposalExceptionTranslator} from './proposal-exception-translator';
import {ProposalResourceContent} from './proposal-resource-content';
import {ProposalSourceSerializerService} from './proposal-source-serializer-service';
import {ProposalDocumentBuilder} from './proposal-document-builder';
import {ProposalKeywordDocumentBuilder} from './proposal-keyword-document-builder';
import {ProposalTranslationDocumentBuilder} from './proposal-translation-document-builder';
import {UserService} from '../../core';

export class ProposalDocumentHolderImpl implements ProposalDocumentHolder {
  private _ID?: number;
  public proposalDocument: ProposalDocument | undefined;
  constructor(
    private remoteResourceFactory: RemoteResourceFactory,
    private sourceDocumentSerializerService: ProposalSourceSerializerService,
    private userService: UserService
    ) {}
  public get ID() {
    return this.proposalDocument?.ID ? this.proposalDocument.ID : this._ID;
  }
  public set ID(newID: number | undefined) {
    this._ID = newID;
  }
  public load(): Observable<ProposalDocumentHolder> {
    if (!this.ID) {
      throw new Error('Proposal document holder must have an ID for it to load');
    }
    const loadStatus = new Subject<ProposalDocumentHolder>();
    const resource = this.remoteResourceFactory.bind(`proposal/${this.ID}`, new ProposalExceptionTranslator(), SessionOption.necessary);
    resource.get<ProposalResourceContent>('', {})
      .subscribe(
        response => {
          const documentBuilder = new ProposalDocumentBuilder(this.userService);
          documentBuilder.ID = response.id;
          documentBuilder.exampleID = response.exampleId;
          documentBuilder.initiator = response.initiator;
          documentBuilder.reviewer = response.reviewer;
          documentBuilder.status = response.status;
          documentBuilder.source = response.source ? this.sourceDocumentSerializerService.getProposalSourceDocument(response.source) : null;
          documentBuilder.version = response.version;
          documentBuilder.text = response.text;
          documentBuilder.keywords = response.keywords.map(keyword => {
            const builder = new ProposalKeywordDocumentBuilder();
            builder.keyword = keyword;
            return builder.buildKeywordDocumentWithCurrentState();
          });
          documentBuilder.translations = response.translations.map(translation => {
            const builder = new ProposalTranslationDocumentBuilder();
            builder.text = translation.text;
            builder.$mark = translation.$mark;
            return builder.buildTranslationDocumentWithCurrentState();
          });
          documentBuilder.italics = response.format.italic;
          documentBuilder.comment = response.comment;
          documentBuilder.note = response.note;
          documentBuilder.resource = resource;
          this.proposalDocument = documentBuilder.buildProposalDocumentWithCurrentState();
        },
        // todo add error handling logic
        () => {},
        () => loadStatus.next(this)
      );
    return loadStatus;
  }
}
