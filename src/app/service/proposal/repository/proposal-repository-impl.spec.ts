import {ProposalRepositoryImpl} from './proposal-repository-impl';
import {TestBed} from '@angular/core/testing';
import {USER_SERVICE, UserService} from '../../../core';
import {UserServiceImpl} from '../../../core/user/user-service-impl';
import {PROPOSAL_SOURCE_SERIALIZER_SERVICE} from '../document/source/proposal-source-serializer-service';
import {ProposalSourceSerializerServiceImpl} from '../document/source/proposal-source-serializer-service-impl';
import {ProposalDocumentBuilder} from '../document/proposal-document-builder';
import {ProposalStatus} from '../proposal-status';
import * as _ from 'lodash';
import {Resource} from '../../remote_resource/resource';
import {Observable, of} from 'rxjs';
import {ProposalDocumentHolder} from '../document/proposal-document-holder';
import {ProposalHandle} from '../proposal-handle';
import {RemoteResourceFactory} from '../../remote_resource/remote-resource-factory';
import {SessionEstablisher} from '../../remote_resource/session-establisher';
import {ExceptionNotifier} from '../../remote_resource/exception-notifier';

class CollectionResourceMock implements Resource {
  constructor() {}
  get<Content>(): Observable<Content> {
    const ob = of([1, 2, 3]) as Observable<any>;
    return ob as Observable<Content>;
  }

  post<Request, Response>(body: any, urlModification?: string): Observable<Response> {
    return of();
  }

  setID(ID: number): void {
  }
}

class ProposalDocumentHolderMock implements ProposalDocumentHolder {
  constructor(private userService: UserService) {}
  public id?: number;
  load(): Observable<ProposalHandle> {
    if (this.id === 1) {
      const documentBuilder = new ProposalDocumentBuilder(this.userService, new ResourceMock());
      documentBuilder.status = ProposalStatus.pending;
      documentBuilder.initiator = 1;
      documentBuilder.ID = 1;
      documentBuilder.comment = 'the first document';
      documentBuilder.text = 'this is the first document';
      documentBuilder.keywords = [];
      documentBuilder.note = 'the first';
      documentBuilder.italics = [];
      documentBuilder.translations = [];
      documentBuilder.source = null;
      const handle = documentBuilder.buildProposalDocumentWithCurrentState();
      return of(handle);
    } else if (this.id === 2) {
      const documentBuilder = new ProposalDocumentBuilder(this.userService, new ResourceMock());
      documentBuilder.status = ProposalStatus.pending;
      documentBuilder.initiator = 2;
      documentBuilder.ID = 2;
      documentBuilder.comment = 'the second document';
      documentBuilder.text = 'this is the second document';
      documentBuilder.keywords = [];
      documentBuilder.note = 'the second';
      documentBuilder.italics = [];
      documentBuilder.translations = [];
      documentBuilder.source = null;
      const handle = documentBuilder.buildProposalDocumentWithCurrentState();
      return of(handle);
    } else {
      const documentBuilder = new ProposalDocumentBuilder(this.userService, new ResourceMock());
      documentBuilder.status = ProposalStatus.pending;
      documentBuilder.initiator = 3;
      documentBuilder.ID = 3;
      documentBuilder.comment = 'the third document';
      documentBuilder.text = 'this is the third document';
      documentBuilder.keywords = [];
      documentBuilder.note = 'the third';
      documentBuilder.italics = [];
      documentBuilder.translations = [];
      documentBuilder.source = null;
      const handle = documentBuilder.buildProposalDocumentWithCurrentState();
      return of(handle);
    }
  }
}

class RemoteResourceFactoryMockImpl implements RemoteResourceFactory {
  sessionEstablisher: SessionEstablisher = {} as SessionEstablisher;

  bind(): Resource {
    return new CollectionResourceMock();
  }

  clearSession(): void {
  }

  passSessionError(error: any): void {
  }

  register(notifier: ExceptionNotifier): void {
  }

  setSession(session: string): void {
  }

}

class ResourceMock implements Resource {
  get<Content>(urlSupplement: string, options: object): Observable<Content> {
    return new Observable<Content>();
  }

  post<Request, Response>(body: any, urlModification?: string): Observable<Response> {
    return new Observable<Response>();
  }

  setID(ID: number): void {
  }
}

describe('Testing proposal repository service', () => {
  describe('loadPendingProposals return value', () => {
    it('should be equal to expected value', () => {
      TestBed.configureTestingModule({
        providers: [
          {provide: USER_SERVICE, useClass: UserServiceImpl},
          {provide: PROPOSAL_SOURCE_SERIALIZER_SERVICE, useClass: ProposalSourceSerializerServiceImpl}
        ]
      });
      const userService = TestBed.inject(USER_SERVICE);
      userService.setUser(1);
      const psss = TestBed.inject(PROPOSAL_SOURCE_SERIALIZER_SERVICE);
      const proposalRepository = new ProposalRepositoryImpl(new RemoteResourceFactoryMockImpl(), userService, psss);

      const fakeGetHolderByID = (id: number) => {
        const holder = new ProposalDocumentHolderMock(userService);
        holder.id = id;
        return holder;
      };

      const documentBuilder1 = new ProposalDocumentBuilder(userService, new ResourceMock());
      documentBuilder1.status = ProposalStatus.pending;
      documentBuilder1.initiator = 1;
      documentBuilder1.ID = 1;
      documentBuilder1.comment = 'the first document';
      documentBuilder1.text = 'this is the first document';
      documentBuilder1.keywords = [];
      documentBuilder1.note = 'the first';
      documentBuilder1.italics = [];
      documentBuilder1.translations = [];
      documentBuilder1.source = null;
      const document1 = documentBuilder1.buildProposalDocumentWithCurrentState();

      const documentBuilder2 = new ProposalDocumentBuilder(userService, new ResourceMock());
      documentBuilder2.status = ProposalStatus.pending;
      documentBuilder2.initiator = 2;
      documentBuilder2.ID = 2;
      documentBuilder2.comment = 'the second document';
      documentBuilder2.text = 'this is the second document';
      documentBuilder2.keywords = [];
      documentBuilder2.note = 'the second';
      documentBuilder2.italics = [];
      documentBuilder2.translations = [];
      documentBuilder2.source = null;
      const document2 = documentBuilder2.buildProposalDocumentWithCurrentState();

      const documentBuilder3 = new ProposalDocumentBuilder(userService, new ResourceMock());
      documentBuilder3.status = ProposalStatus.pending;
      documentBuilder3.initiator = 3;
      documentBuilder3.ID = 3;
      documentBuilder3.comment = 'the third document';
      documentBuilder3.text = 'this is the third document';
      documentBuilder3.keywords = [];
      documentBuilder3.note = 'the third';
      documentBuilder3.italics = [];
      documentBuilder3.translations = [];
      documentBuilder3.source = null;
      const document3 = documentBuilder3.buildProposalDocumentWithCurrentState();

      spyOn<any>(proposalRepository, 'getHolderByID').and.callFake(fakeGetHolderByID);
      const expected = [document1, document2, document3].map(document => _.omit(document, _.functions(document)));
      proposalRepository.loadPendingProposals().subscribe(proposals => {
        const output = proposals.map(proposal => _.omit(proposal, _.functions(proposal)));
        const comparison = _.isEqual(expected, output);
        expect(comparison).toBe(true);
      });
    });
  });
});


