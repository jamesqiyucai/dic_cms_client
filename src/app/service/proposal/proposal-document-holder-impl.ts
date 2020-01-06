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
          this.proposalDocument = new ProposalDocumentImpl(
            content.exampleId,
            content.initiator,
            content.reviewer,
            content.status,
            this.remoteResourceFactory.bind(`proposal/${this.ID}`, new ProposalExceptionTranslator()),
            content.id,
            content.version,
            content.text,
            content.keywords,
            content.translations.map(translation => new ProposalTranslationDocumentImpl(translation.id, translation.text, null)),
            content.format.italic,
            this.getSourceDocument(content.source),
            content.comment,
            content.note
          );
        },
        err => {},
        () => loadStatus.next(this)
      );
    return loadStatus;
  }
}
