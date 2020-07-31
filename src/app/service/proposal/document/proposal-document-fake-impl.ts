import {ProposalHandle} from '../proposal-handle';
import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ProposalKeywordHandle} from './keyword/proposal-keyword-handle';
import {ProposalTranslationHandle} from './translation/proposal-translation-handle';
import {ProposalSourceHandle} from './source/proposal-source-handle';
import {ProposalSourceType} from './source/proposal-source-type';
import {ProposalSourceFactory} from './source/proposal-source-factory';
import {ProposalKeywordDocumentFakeImpl} from './keyword/proposal-keyword-document-fake-impl';
import {ProposalTranslationDocumentFakeImpl} from './translation/proposal-translation-document-fake-impl';
import {ProposalSourceFactoryImpl} from './source/proposal-source-factory-impl';
import {ProposalSourceDocumentFakeImpl} from './source/proposal-source-document-fake-impl';

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
