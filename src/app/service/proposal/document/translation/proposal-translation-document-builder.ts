import {ProposalTranslationDocumentImpl} from './proposal-translation-document-impl';

export class ProposalTranslationDocumentBuilder {
  text?: string;
  $mark?: string;
  buildBlankTranslationDocument($mark: string) {
    this.$mark = $mark;
    this.text = '';
    return new ProposalTranslationDocumentImpl(this);
  }
  buildTranslationDocumentWithCurrentState() {
    return new ProposalTranslationDocumentImpl(this);
  }
}
