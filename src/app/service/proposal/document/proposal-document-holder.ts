import {Observable} from 'rxjs';
import {ProposalDocument} from './proposal-document';
import {ProposalHandle} from '../proposal-handle';

export interface ProposalDocumentHolder {
  ID?: number;
  proposalDocument?: ProposalDocument;
  load(): Observable<ProposalHandle>;
}
