import {ProposalHandle} from './proposal-handle';
import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ProposalKeywordHandle} from './proposal-keyword-handle';
import {ProposalTranslationHandle} from './proposal-translation-handle';
import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceType} from './proposal-source-type';
import {ProposalSourceFactory} from './proposal-source-factory';
import {ProposalKeywordDocumentFakeImpl} from './proposal-keyword-document-fake-impl';
import {ProposalTranslationDocumentFakeImpl} from './proposal-translation-document-fake-impl';
import {ProposalSourceFactoryImpl} from './proposal-source-factory-impl';
import {ProposalSourceDocumentFakeImpl} from './proposal-source-document-fake-impl';

export class ProposalDocumentFakeImpl implements ProposalHandle {
  comment = '';
  commentObservable = new Observable<string>();
  initiatorObservable = new Observable<number>();
  italics = List();
  italicsObservable = new Observable<any>();
  keywords = List();
  keywordsObservable = new Observable<any>();
  note = '';
  noteObservable = new Observable<any>();
  reviewerObservable = new Observable<any>();
  source = null;
  sourceObservable = new Observable<any>();
  statusObservable = new Observable<any>();
  text = '';
  textObservable = new Observable<any>();
  translations = List();
  translationsObservable = new Observable<any>();

  addKeyword(): ProposalKeywordHandle {
    return new ProposalKeywordDocumentFakeImpl();
  }

  addTranslation(): ProposalTranslationHandle {
    return new ProposalTranslationDocumentFakeImpl();
  }

  approve(): Observable<any> {
    return new Observable<any>();
  }

  getProposalSourceFactory(): ProposalSourceFactory {
    return new ProposalSourceFactoryImpl();
  }

  getSource(type: ProposalSourceType): ProposalSourceHandle {
    return new ProposalSourceDocumentFakeImpl();
  }

  reject(): Observable<any> {
    return new Observable<any>();
  }

  save(): Observable<any> {
    return new Observable<any>();
  }

}
