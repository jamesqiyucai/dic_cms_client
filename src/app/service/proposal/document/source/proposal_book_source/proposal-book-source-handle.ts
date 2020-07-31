import {Observable} from 'rxjs';
import {ProposalSourceHandle} from '../proposal-source-handle';

export interface ProposalBookSourceHandle extends ProposalSourceHandle {
  page: string;
  pageObservable: Observable<string>;
  initialPublishingYear: string;
  initialPublishingYearObservable: Observable<string>;
  publishedYear: string;
  publishedYearObservable: Observable<string>;
  publishedPlace: string;
  publishedPlaceObservable: Observable<string>;
}
