// import {ProposalDocument} from './proposal-document';
// import {ProposalResourceContent} from './proposal-resource-content';
// import {ProposalDocumentImpl} from './proposal-document-impl';
// import {Inject} from '@angular/core';
// import {REMOTE_RESOURCE_FACTORY, RemoteResourceFactory} from '../remote_resource';
// import {ProposalExceptionTranslator} from './proposal-exception-translator';
// import {ProposalSourceDocument} from './proposal-source-document';
// import {ProposalBookSourceDocumentImpl} from './proposal-book-source-document-impl';
//
// export class ProposalResourceTransformer {
//   private
//   constructor(@Inject(REMOTE_RESOURCE_FACTORY) private remoteResourceFactory: RemoteResourceFactory) {}
//   public getProposalDocument(proposalResource: ProposalResourceContent): ProposalDocument {
//     let source;
//     switch (proposalResource.source.type) {
//       case 'book':
//         source = new ProposalBookSourceDocumentImpl(
//           'book',
//           proposalResource.source.author,
//           proposalResource.source.title,
//           proposalResource.source.page,
//           proposalResource.source.
//         );
//     }
//     return new ProposalDocumentImpl(
//       proposalResource.exampleId,
//       proposalResource.initiator,
//       proposalResource.reviewer,
//       proposalResource.status,
//       this.remoteResourceFactory.bind('proposals', new ProposalExceptionTranslator()),
//       proposalResource.id,
//       proposalResource.version,
//       proposalResource.text,
//       proposalResource.keywords,
//       proposalResource.translations,
//       proposalResource.format.italic,
//
//     );
//   }
// }
//
// class SourceTransformer {
//   public getSourceDocument(): ProposalSourceDocument {
//     return undefined;
//   }
// }
