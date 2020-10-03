import {Observable} from 'rxjs';

export interface ExampleProposalReviewerTranslationModel {
  readonly text$: Observable<string>;
}
