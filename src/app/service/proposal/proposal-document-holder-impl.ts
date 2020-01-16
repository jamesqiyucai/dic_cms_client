import {ProposalDocumentHolder} from './proposal-document-holder';
import {ProposalDocument} from './proposal-document';
import {Observable, Subject} from 'rxjs';
import {RemoteResourceFactory, Resource} from '../remote_resource';
import {ProposalExceptionTranslator} from './proposal-exception-translator';
import {ProposalResourceContent} from './proposal-resource-content';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';
import {ProposalSourceDocument} from './proposal-source-document';
import {ProposalBookSourceResourceContent} from './proposal-book-source-resource-content';
import {ProposalBookSourceDocumentImpl} from './proposal-book-source-document-impl';
import {ProposalJournalSourceResourceContent} from './proposal-journal-source-resource-content';
import {ProposalJournalSourceDocumentImpl} from './proposal-journal-source-document-impl';
import {ProposalDocumentImpl} from './proposal-document-impl';
import {ProposalTranslationDocumentImpl} from './proposal-translation-document-impl';
import {ProposalKeywordDocumentImpl} from './proposal-keyword-document-impl';
import {List} from 'immutable';

export class ProposalDocumentHolderImpl implements ProposalDocumentHolder {
  private _ID: number = undefined;
  private proposalResource: Resource;
  public proposalDocument: ProposalDocument = undefined;
  constructor(private remoteResourceFactory: RemoteResourceFactory) {}
  private getSourceDocument(sourceContent: ProposalSourceResourceContent): ProposalSourceDocument {
    if (sourceContent.type === 'book') {
      const content = <ProposalBookSourceResourceContent>sourceContent;
      return new ProposalBookSourceDocumentImpl(
        content.author,
        content.title,
        content.page,
        content.initialPublishingYear,
        content.publishedYear,
        content.publishedPlace
      );
    } else if (sourceContent.type === 'journal') {
      const content = <ProposalJournalSourceResourceContent>sourceContent;
      return new ProposalJournalSourceDocumentImpl(
        content.author,
        content.title,
        content.page,
        content.passageTitle,
        content.publishingDate,
      );
    }
  }
  public get ID() {
    return this._ID;
  }
  public set ID(newID: number) {
    this.proposalResource = this.remoteResourceFactory.bind(`proposals/${newID}`, new ProposalExceptionTranslator());
  }
  public load(): Observable<ProposalDocumentHolder> {
    const loadStatus = new Subject<ProposalDocumentHolder>();
    this.proposalResource.get<ProposalResourceContent>()
      .subscribe(
        content => {
          const document =
            new ProposalDocumentImpl(this.remoteResourceFactory.bind(`proposal/${this.ID}`, new ProposalExceptionTranslator()));
          document.ID = content.id;
          document.exampleID = content.exampleId;
          document.initiator = content.initiator;
          document.reviewer = content.reviewer;
          document.status = content.status;
          document.source = this.getSourceDocument(content.source);
          document.version = content.version;
          document.text = content.text;
          document.keywords = List(content.keywords.map(keyword => {
            const keywordDocument = new ProposalKeywordDocumentImpl();
            keywordDocument.keyword = keyword;
            return keywordDocument;
          }));
          document.translations = List(content.translations.map(translation => {
            return new ProposalTranslationDocumentImpl(translation.id, translation.text, null);
          }));
          document.italics = List(content.format.italic);
          document.comment = content.comment;
          document.note = content.note;
        },
        err => {},
        () => loadStatus.next(this)
      );
    return loadStatus;
  }
}
