import {Observable} from 'rxjs';
import {ProposalSourceType} from './proposal-source-type';

export interface ProposalSourceHandle {
  author: string;
  authorObservable: Observable<string>;
  title: string;
  titleObservable: Observable<string>;
  getType(): ProposalSourceType;
}
