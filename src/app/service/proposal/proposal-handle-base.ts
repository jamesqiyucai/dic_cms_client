import {Observable} from 'rxjs';
import {ProposalTranslationHandle} from './document/translation/proposal-translation-handle';
import {ProposalSourceHandle} from './document/source/proposal-source-handle';
import {ProposalKeywordHandle} from './document/keyword/proposal-keyword-handle';
import {List} from 'immutable';

export interface ProposalHandleBase {
  readonly ID$?: Observable<number>;
  readonly exampleID$?: Observable<number>;
  readonly initiator$: Observable<number>;
  readonly reviewer$: Observable<number>;
  readonly status$: Observable<string>;
  readonly text$: Observable<string>;
  readonly keywords$: Observable<List<ProposalKeywordHandle>>;
  readonly translations$: Observable<List<ProposalTranslationHandle>>;
  readonly italics$: Observable<List<[number, number]>>;
  readonly note$: Observable<string>;
  readonly comment$: Observable<string>;
  readonly source$: Observable<ProposalSourceHandle | null>;
  readonly currentSource: ProposalSourceHandle | null;
}
