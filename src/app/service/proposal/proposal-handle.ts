import {ExampleHandle} from '../example';
import {Observable} from 'rxjs';
import {ProposalTranslationHandle} from './proposal-translation-handle';
import {List} from 'immutable';
import {ProposalKeywordHandle} from './proposal-keyword-handle';
import {ProposalSourceHandle} from './proposal-source-handle';

export interface ProposalHandle extends ExampleHandle {
  exampleID: number;
  $exampleID: Observable<number>;
  status: string;
  $status: Observable<string>;
  keywords: List<ProposalKeywordHandle>;
  $keywords: Observable<List<ProposalKeywordHandle>>;
  translations: List<ProposalTranslationHandle>;
  $translations: Observable<List<ProposalTranslationHandle>>;
  source: ProposalSourceHandle;
  $source: Observable<ProposalSourceHandle>;
  createTranslation(): ProposalTranslationHandle;
  createKeyword(): ProposalKeywordHandle;
  changeSource(toType: string): any;
  save(): Observable<any>;
  approve(): Observable<any>;
  reject(): Observable<any>;
}
