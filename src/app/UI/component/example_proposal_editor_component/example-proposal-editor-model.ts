import {ExampleProposalModelBase} from '../example_proposal_base/example-proposal-model-base';
import {List} from 'immutable';
import {Observable} from 'rxjs';
import {SourceType} from '../../../source-type';
import {ListManipulatorModel} from '../list_manipulator/list-manipulator-model';
import {ProposalKeywordHandle} from '../../../service/proposal/document/keyword/proposal-keyword-handle';
import {ProposalTranslationHandle} from '../../../service/proposal';

export interface ExampleProposalEditorModel extends ExampleProposalModelBase {
  readonly keywordsModel: ListManipulatorModel<ProposalKeywordHandle>;
  readonly translationsModel: ListManipulatorModel<ProposalTranslationHandle>;
  readonly editable: boolean;
  disableEditing(): void;
  enableEditing(): void;
  setText(newText: string): void;
  setComment(newComment: string): void;
  setNote(newNote: string): void;
  setItalics(newItalics: List<[number, number]>): void;
  setSource(type: SourceType | null): void;
  submit(): Observable<unknown>;
}
