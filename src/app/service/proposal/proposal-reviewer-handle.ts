import {ProposalHandleBase} from './proposal-handle-base';
import {Observable} from 'rxjs';

export interface ProposalReviewerHandle extends ProposalHandleBase {
  approve(): Observable<unknown>;
  reject(): Observable<unknown>;
}
