import {ExampleProposalReviewerListItemModel} from '../example_proposal_reviewer_list_item/example-proposal-reviewer-list-item-model';
import {ExampleProposalReviewerItemDetailModel} from './example-proposal-reviewer-item-detail-model';
import {ProposalReviewerHandle} from '../../../service/proposal/proposal-reviewer-handle';
import {forkJoin, Observable} from 'rxjs';
import {UserService} from '../../../core';
import {map, mergeMap} from 'rxjs/operators';
import {List} from 'immutable';

export class ExampleProposalReviewerItemDetailModelImpl implements ExampleProposalReviewerListItemModel, ExampleProposalReviewerItemDetailModel {
  private userService: UserService;
  private handle: ProposalReviewerHandle;
  public readonly formattedText$: Observable<string>;
  public readonly comment$: Observable<string>;
  public readonly note$: Observable<string>;
  public readonly initiator$: Observable<string>;
  public readonly keywords$: Observable<List<string>>;
  public readonly translations$: Observable<List<string>>;
  public readonly sourceModel$: Observable<unknown | null>;
  constructor(handle: ProposalReviewerHandle, userService: UserService) {
    this.handle = handle;
    this.userService = userService;
    this.formattedText$ = handle.text$;
    this.comment$ = handle.comment$;
    this.note$ = handle.note$;
    this.initiator$ = handle.initiator$.pipe(
      map(userId => this.userService.getUser(userId))
    );
    this.keywords$ = handle.keywords$.pipe(
      mergeMap(listOfKeywordHandles => forkJoin(listOfKeywordHandles.map(keywordHandle => keywordHandle.keyword$)))
    );
    this.translations$ = handle.translations$.pipe(
      mergeMap(listOfTranslationHandles => forkJoin(listOfTranslationHandles.map(translationHandle => translationHandle.translation$)))
    );
    this.sourceModel$ = handle.source$.pipe(
      map(handle => )
    );
  }
  public get text$() {
    return this.formattedText$;
  }
  public approve(): Observable<any> {
    return this.handle.approve();
  }
  public reject(): Observable<any> {
    return this.handle.reject();
  }
}
