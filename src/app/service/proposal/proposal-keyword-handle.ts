import {Observable} from 'rxjs';

export interface ProposalKeywordHandle {
  keyword: string;
  keywordObservable: Observable<string>;
}
