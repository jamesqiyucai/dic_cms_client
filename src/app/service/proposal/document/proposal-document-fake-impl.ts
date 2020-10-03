import {ProposalEditorHandle} from '../proposal-editor-handle';
import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ProposalKeywordHandle} from './keyword/proposal-keyword-handle';
import {ProposalTranslationHandle} from './translation/proposal-translation-handle';
import {ProposalSourceHandle} from './source/proposal-source-handle';
import {SourceType} from '../../../source-type';
import {ProposalSourceFactory} from './source/proposal-source-factory';
import {ProposalKeywordDocumentFakeImpl} from './keyword/proposal-keyword-document-fake-impl';
import {ProposalTranslationDocumentFakeImpl} from './translation/proposal-translation-document-fake-impl';
import {ProposalSourceFactoryImpl} from './source/proposal-source-factory-impl';
import {ProposalSourceDocumentFakeImpl} from './source/proposal-source-document-fake-impl';

export class ProposalDocumentFakeImpl implements ProposalEditorHandle {
  comment = '';
  comment$ = new Observable<string>();
  initiator$ = new Observable<number>();
  italics = List();
  italics$ = new Observable<any>();
  keywords = List();
  keywords$ = new Observable<any>();
  note = '';
  note$ = new Observable<any>();
  reviewer$ = new Observable<any>();
  currentSource = null;
  source$ = new Observable<any>();
  status$ = new Observable<any>();
  text = '';
  text$ = new Observable<any>();
  translations = List();
  translations$ = new Observable<any>();

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

  getNewSource(type: SourceType): ProposalSourceHandle {
    return new ProposalSourceDocumentFakeImpl();
  }

  reject(): Observable<any> {
    return new Observable<any>();
  }

  save(): Observable<any> {
    return new Observable<any>();
  }

}
