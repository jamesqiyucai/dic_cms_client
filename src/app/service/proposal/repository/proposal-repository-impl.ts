import {ProposalRepository} from './proposal-repository';
import {REMOTE_RESOURCE_FACTORY, RemoteResourceFactory, Resource, SessionOption} from '../../remote_resource/index1';
import {ProposalHandle} from '../proposal-handle';
import {Inject, Injectable} from '@angular/core';
import {ProposalExceptionTranslator} from '../proposal-exception-translator';
import {USER_SERVICE, UserService} from '../../../core';
import {ProposalDocumentHolder} from '../document/proposal-document-holder';
import {ProposalDocumentHolderImpl} from '../document/proposal-document-holder-impl';
import {ProposalDocumentBuilder} from '../document/proposal-document-builder';
import {PROPOSAL_SOURCE_SERIALIZER_SERVICE, ProposalSourceSerializerService} from '../document/source/proposal-source-serializer-service';
import {concat, of} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {map, mergeAll, toArray} from 'rxjs/operators';

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
  private getHolderByID(ID: number): ProposalDocumentHolder {
    const holder = new ProposalDocumentHolderImpl(this.remoteResourceFactory, this.proposalSourceSerializerService, this.userService);
    holder.ID = ID;
    this._proposals.push(holder);
    return holder;
  }
  public createBlankProposal(): ProposalHandle {
    // todo: give rrf parameter a proper exception translator
    const proposalBuilder = new ProposalDocumentBuilder(this.userService, this.remoteResourceFactory.bind('api/proposals', new ProposalExceptionTranslator(), SessionOption.none));
    const document = proposalBuilder.buildBlankProposalDocument();
    const holder = new ProposalDocumentHolderImpl(this.remoteResourceFactory, this.proposalSourceSerializerService, this.userService);
    holder.proposalDocument = document;
    this._proposals.push(holder);
    return document;
  }
  public loadPendingProposals() {
    const params = new HttpParams();
    params.set('reviewer', '1');
    return this._proposalCollectionResource.get<number[]>('', {params})
      .pipe(
        map(idArray => idArray.map(id => this.getHolderByID(id).load()).reduce((a, b) => concat(a, b), of())),
        mergeAll(),
        toArray()
      );
  }
}
