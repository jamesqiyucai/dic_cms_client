import {Observable} from 'rxjs';
import {ProposalTranslationHandle} from './document/translation/proposal-translation-handle';
import {List} from 'immutable';
import {ProposalKeywordHandle} from './document/keyword/proposal-keyword-handle';
import {ProposalSourceHandle} from './document/source/proposal-source-handle';
import {ProposalHandleBase} from './proposal-handle-base';
import {SourceType} from '../../source-type';

export interface ProposalEditorHandle extends ProposalHandleBase {
  setText(newText: string): void;
  setKeywords(newKeywords: List<ProposalKeywordHandle>): void;
  setTranslations(newTranslations: List<ProposalTranslationHandle>): void;
  setItalics(newItalics: List<[number, number]>): void;
  setNote(newNote: string): void;
  setComment(newComment: string): void;
  setSource(newSource: ProposalSourceHandle | null): void;
  addTranslation(): ProposalTranslationHandle;
  addKeyword(): ProposalKeywordHandle;
  getNewSource(type: SourceType): ProposalSourceHandle;
  save(): Observable<unknown>;
}
