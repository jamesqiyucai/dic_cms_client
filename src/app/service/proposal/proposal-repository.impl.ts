import {ProposalRepository} from './proposal-repository';
import {REMOTE_RESOURCE_FACTORY, RemoteResourceFactory, Resource, SessionOption} from '../remote_resource';
import {ProposalHandle} from './proposal-handle';
import {Inject, Injectable} from '@angular/core';
import {ProposalExceptionTranslator} from './proposal-exception-translator';
import {USER_SERVICE, UserService} from '../../core';
import {ProposalDocumentHolder} from './proposal-document-holder';
import {ProposalDocumentHolderImpl} from './proposal-document-holder-impl';
import {ProposalDocumentBuilder} from './proposal-document-builder';
import {PROPOSAL_SOURCE_SERIALIZER_SERVICE, ProposalSourceSerializerService} from './proposal-source-serializer-service';

@Injectable()
export class ProposalRepositoryImpl implements ProposalRepository {
  // The structure adopts an array instead of a map so that there is no need to separately store documents with and without ID
  private _proposals: ProposalDocumentHolder[];
  private _proposalCollectionResource: Resource;
  constructor(
    @Inject(REMOTE_RESOURCE_FACTORY) private remoteResourceFactory: RemoteResourceFactory,
    @Inject(USER_SERVICE) private userService: UserService,
    @Inject(PROPOSAL_SOURCE_SERIALIZER_SERVICE) private proposalSourceSerializerService: ProposalSourceSerializerService
  ) {
    this._proposals = [];
    // tslint:disable-next-line:max-line-length
    this._proposalCollectionResource = this.remoteResourceFactory.bind('proposals', new ProposalExceptionTranslator(), SessionOption.necessary);
  }
  public createBlankProposal(): ProposalHandle {
    const proposalBuilder = new ProposalDocumentBuilder();
    const document = proposalBuilder.buildBlankProposalDocument();
    const holder = new ProposalDocumentHolderImpl(this.remoteResourceFactory, this.proposalSourceSerializerService);
    this._proposals.push(holder);
    return document;
  }
}
