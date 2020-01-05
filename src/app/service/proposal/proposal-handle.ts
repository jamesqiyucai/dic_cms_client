import {ExampleHandle} from '../example';
import {Observable} from 'rxjs';
import {ProposalTranslationHandle} from './proposal-translation-handle';

export interface ProposalHandle extends ExampleHandle {
  exampleID: number;
  $exampleID: Observable<number>;
  status: string;
  $status: Observable<string>;
  createTranslation(): ProposalTranslationHandle;
  changeSource(toType: string): any;
  save(): Observable<any>;
  approve(): Observable<any>;
  reject(): Observable<any>;
}
