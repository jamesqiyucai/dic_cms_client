import {ProposalRepository} from './proposal-repository';
import {REMOTE_RESOURCE_FACTORY, RemoteResourceFactory, Resource} from '../remote_resource';
import {from, Subject} from 'rxjs';
import {ProposalHandle} from './proposal-handle';
import {List} from 'immutable';
import {Inject, Injectable} from '@angular/core';
import {ProposalExceptionTranslator} from './proposal-exception-translator';
import {ProposalDocumentImpl} from './proposal-document-impl';
import {USER_SERVICE, UserService} from '../../core';
import {HttpParams} from '@angular/common/http';
import {flatMap, map} from 'rxjs/operators';
import {ProposalDocumentHolder} from './proposal-document-holder';
import {ProposalDocumentHolderImpl} from './proposal-document-holder-impl';

@Injectable()
export class ProposalRepositoryImpl implements ProposalRepository {
  private _proposals: ProposalDocumentHolder[] = [];
  private readonly _remoteResourceFactory: RemoteResourceFactory;
  private _proposalCollectionResource: Resource;
  private _userService: UserService;
  constructor(
    @Inject(REMOTE_RESOURCE_FACTORY) remoteResourceFactory: RemoteResourceFactory,
    @Inject(USER_SERVICE) userService: UserService
  ) {
    this._userService = userService;
    this._remoteResourceFactory = remoteResourceFactory;
    this._proposalCollectionResource = this._remoteResourceFactory.bind('proposals', new ProposalExceptionTranslator());
  }
  public get pendingProposals() {
    const pendingProposals = this._proposals
      .filter(holder => holder.proposalDocument.status === 'pending')
      .map(holder => holder.proposalDocument);
    return List(pendingProposals);
  }
  public createProposal(): ProposalHandle {
    const newProposal = new ProposalDocumentImpl(this._remoteResourceFactory.bind('proposals', new ProposalExceptionTranslator()));
    newProposal.initiator = this._userService.getCurrentUser();
    newProposal.reviewer = 1;
    newProposal.status = 'pending';
    const newProposalHolder = new ProposalDocumentHolderImpl(this._remoteResourceFactory);
    newProposalHolder.proposalDocument = newProposal;
    this._proposals.push(newProposalHolder);
    return newProposal;
  }
  public loadPendingProposals() {
    const loadStatus = new Subject<any>();
    const params = new HttpParams().set('reviewer', '1');
    this._proposalCollectionResource.get<number[]>({params})
      .pipe(
        flatMap(ids => from(ids)),
        map(id => {
          const holder = new ProposalDocumentHolderImpl(this._remoteResourceFactory);
          holder.ID = id;
          return holder;
        }),
        flatMap(holder => holder.load()),
      )
      .subscribe(
        holder => this._proposals.push(holder),
        err => {},
        () => {
          loadStatus.next();
        }
      );
  }
}
