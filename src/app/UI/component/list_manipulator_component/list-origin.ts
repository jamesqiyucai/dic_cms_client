import {Observable} from 'rxjs';
import {List} from 'immutable';
import {ProposalTranslationHandle} from '../../../service/proposal';

export interface ListOrigin {
  $list: Observable<List<any>>;
  list: List<any>;
  createTranslationHandle(): ProposalTranslationHandle;
}
