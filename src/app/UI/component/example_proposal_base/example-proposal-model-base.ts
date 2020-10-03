import {Observable} from 'rxjs';

export interface ExampleProposalModelBase {
  readonly formattedText$: Observable<string>;
  readonly comment$: Observable<string>;
  readonly note$: Observable<string>;
  readonly sourceModel$: Observable<unknown | null>;
}
