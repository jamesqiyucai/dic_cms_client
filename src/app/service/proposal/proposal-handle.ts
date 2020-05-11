import {Observable} from 'rxjs';
import {ProposalTranslationHandle} from './proposal-translation-handle';
import {List} from 'immutable';
import {ProposalKeywordHandle} from './proposal-keyword-handle';
import {ProposalSourceHandle} from './proposal-source-handle';
import {ProposalSourceFactory} from './proposal-source-factory';
import {ProposalSourceType} from './proposal-source-type';

export interface ProposalHandle {
  IDObservable?: Observable<number>;
  exampleIDObservable?: Observable<number>;
  initiatorObservable: Observable<number>;
  reviewerObservable: Observable<number>;
  statusObservable: Observable<string>;
  versionObservable?: Observable<number>;
  text: string;
  textObservable: Observable<string>;
  keywords: List<ProposalKeywordHandle>;
  keywordsObservable: Observable<List<ProposalKeywordHandle>>;
  translations: List<ProposalTranslationHandle>;
  translationsObservable: Observable<List<ProposalTranslationHandle>>;
  italics: List<[number, number]>;
  italicsObservable: Observable<List<[number, number]>>;
  note: string;
  noteObservable: Observable<string>;
  comment: string;
  commentObservable: Observable<string>;
  source: ProposalSourceHandle | null;
  sourceObservable: Observable<ProposalSourceHandle | null>;
  addTranslation(): ProposalTranslationHandle;
  addKeyword(): ProposalKeywordHandle;
  getSource(type: ProposalSourceType): ProposalSourceHandle;
  getProposalSourceFactory(): ProposalSourceFactory;
  save(): Observable<any>;
  approve(): Observable<any>;
  reject(): Observable<any>;
}
