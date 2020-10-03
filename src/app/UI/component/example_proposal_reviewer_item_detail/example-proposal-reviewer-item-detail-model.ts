import {Observable} from 'rxjs';
import {ExampleProposalModelBase} from '../example_proposal_base/example-proposal-model-base';
import {List} from 'immutable';

export interface ExampleProposalReviewerItemDetailModel extends ExampleProposalModelBase {
  readonly keywords$: Observable<List<string>>;
  readonly translations$: Observable<List<string>>;
  approve(): Observable<any>;
  reject(): Observable<any>;
}
