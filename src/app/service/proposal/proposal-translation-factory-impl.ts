import {ProposalTranslationFactory} from './proposal-translation-factory';
import {ProposalTranslationDocumentBuilder} from './proposal-translation-document-builder';
import {ProposalTranslationHandle} from './proposal-translation-handle';

export class ProposalTranslationFactoryImpl implements ProposalTranslationFactory {
  private translationBuilder: ProposalTranslationDocumentBuilder;
  private readonly markGetter: () => string;
  constructor(markGetter: () => string) {
    this.translationBuilder = new ProposalTranslationDocumentBuilder();
    this.markGetter = markGetter;
  }
  public getProposalTranslation(): ProposalTranslationHandle {
    return this.translationBuilder.buildBlankTranslationDocument(this.markGetter());
  }
}
