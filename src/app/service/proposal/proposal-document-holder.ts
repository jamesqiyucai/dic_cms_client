import {Observable} from 'rxjs';
import {ProposalDocument} from './proposal-document';

export interface ProposalDocumentHolder {
  ID?: number;
  proposalDocument?: ProposalDocument;
  load(): Observable<ProposalDocumentHolder>;
}
