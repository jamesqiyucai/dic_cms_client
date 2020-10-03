import {Observable} from 'rxjs';
import {SourceType} from '../../../../source-type';

export interface ProposalSourceHandle {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  getType(): SourceType;
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
}
