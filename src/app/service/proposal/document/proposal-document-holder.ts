import {Observable} from 'rxjs';
import {ProposalDocument} from './proposal-document';
import {ProposalEditorHandle} from '../proposal-editor-handle';

export interface ProposalDocumentHolder {
  ID?: number;
  proposalDocument?: ProposalDocument;
  load(): Observable<ProposalEditorHandle>;
}
