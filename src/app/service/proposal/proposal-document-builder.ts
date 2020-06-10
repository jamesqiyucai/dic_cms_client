import {ProposalStatus} from './proposal-status';
import {ProposalKeywordDocument} from './proposal-keyword-document';
import {ProposalTranslationDocument} from './proposal-translation-document';
import {ProposalSourceDocument} from './proposal-source-document';
import {ProposalDocumentImpl} from './proposal-document-impl';
import {Resource} from '../remote_resource/index1';

export class ProposalDocumentBuilder {
  ID?: number;
  exampleID?: number;
  initiator?: number;
  reviewer?: number;
  status?: ProposalStatus;
  version?: number;
  text?: string;
  keywords?: ProposalKeywordDocument[];
  translations?: ProposalTranslationDocument[];
  italics?: [number, number][];
  note?: string;
  comment?: string;
  source?: ProposalSourceDocument | null;
  resource?: Resource;
  constructor() {}
  buildBlankProposalDocument() {
    this.status = ProposalStatus.draft;
    this.text = '';
    this.keywords = [];
    this.translations = [];
    this.italics = [];
    this.note = '';
    this.comment = '';
    this.source = null;
    return new ProposalDocumentImpl(this);
  }
  buildProposalDocumentWithCurrentState() {
    return new ProposalDocumentImpl(this);
  }
}
