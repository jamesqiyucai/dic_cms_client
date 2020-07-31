import {ProposalKeywordDocumentBuilder} from './proposal-keyword-document-builder';
import {ProposalKeywordFactory} from './proposal-keyword-factory';

export class ProposalKeywordFactoryImpl implements ProposalKeywordFactory {
  private keywordBuilder: ProposalKeywordDocumentBuilder;
  constructor() {
    this.keywordBuilder = new ProposalKeywordDocumentBuilder();
  }
  public getProposalKeyword() {
    return this.keywordBuilder.buildBlankKeywordDocument();
  }
}
