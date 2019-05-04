import {Inject, Injectable} from '@angular/core';
import {ExampleProposalService} from './example-proposal.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ExampleProposalServiceModel} from '../../model/example_proposal/example-proposal.service.model';
import {ExampleSourceJournalServiceModel} from '../../model/example_proposal/example-source-journal.service.model';
import {ExampleSourceBookServiceModel} from '../../model/example_proposal/example-source-book.service.model';
import {EXAMPLE_PROPOSAL_SERV_ID_SERVICE} from '../../../core/example_proposal_serv_id/injection-token';
import {ExampleProposalServIdService} from '../../../core/example_proposal_serv_id/example-proposal-serv-id-service.interface';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {ExampleProposalData} from './example-proposal.data';
import {List} from 'immutable';
import {ExampleProposalPurposeServiceModelTypes} from '../../model/example_proposal/example-proposal-purpose.service.model.types';
import {ExampleProposalSourceServiceModelType} from '../../model/example_proposal/example-proposal-source.service.model.type';
import {ExampleProposalServiceModelTypesFactory} from '../../model/example_proposal/example-proposal.service.model.types.factory';

@Injectable()
export class ExampleProposalServiceImplementation implements ExampleProposalService {
  public readonly types: ExampleProposalServiceModelTypesFactory;
  private _exampleProposals: BehaviorSubject<List<ExampleProposalServiceModel>>;
  public readonly exampleProposals: Observable<List<ExampleProposalServiceModel>>;

  private static approvePersistentExampleProposal(identifier: number): Observable<any> {
    return undefined;
  }

  private static rejectPersistentExampleProposal(identifier: number): Observable<any> {
    return undefined;
  }

  private static createPersistentExampleProposal(identifier: number): Observable<any> {
    return undefined;
  }

  private static getPersistentExampleProposal(id: number): Observable<ExampleProposalData> {
    return undefined;
  }

  private static getPersistentPendingProposalIds(userId: number): Observable<number[]> {
    return undefined;
  }

  constructor(
    @Inject(EXAMPLE_PROPOSAL_SERV_ID_SERVICE) private exampleProposalServiceModelIdentifierService: ExampleProposalServIdService,
    @Inject(USER_SERVICE) private userService: UserService,
    private http: HttpClient
  ) {
    this.types = new ExampleProposalServiceModelTypesFactory();
    this.exampleProposals = this._exampleProposals.asObservable();
    this.init();
  }

  private init() {
    this._exampleProposals = new BehaviorSubject<List<ExampleProposalServiceModel>>(List([]));
  }

  private getProposal(identifier: number): ExampleProposalServiceModel {
    return this._exampleProposals.getValue().find(proposal => proposal.identifier === identifier);
  }

  private getProposalIndex(identifier: number): number {
    return this._exampleProposals.value.findIndex(proposal => proposal.identifier === identifier);
  }

  private makeProposalFromData(data: ExampleProposalData, purpose: ExampleProposalPurposeServiceModelTypes): ExampleProposalServiceModel {
    return new ExampleProposalServiceModel(
      this.exampleProposalServiceModelIdentifierService.getId(),
      purpose,
      data.id,
      data.initiator,
      data.status,
      data.exampleId,
      data.version,
      data.text,
      data.format.italic,
      data.translations,
      data.keywords,
      data.note,
      data.comment,
      data.source
    );
  }

  private makeNewProposalsWithFetchedProposals(
    currentProposals: List<ExampleProposalServiceModel>,
    fetchedProposals: List<ExampleProposalServiceModel>
  ): List<ExampleProposalServiceModel> {
    let newProposals: List<ExampleProposalServiceModel>;
    fetchedProposals.forEach(p => {
      const i = currentProposals.findIndex(val => val.id === p.id);
      if (i !== -1) {
        newProposals = currentProposals.update(
          i,
          () => p,
        );
      } else {
        newProposals = currentProposals.push(p);
      }
    });
    return newProposals ? newProposals : List([]);
  }

  public createNewExampleProposalInService(
    purpose: ExampleProposalPurposeServiceModelTypes,
    id: number,
    initiator: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    italic: Array<[number, number]>,
    translations: Array<string>,
    keywords: Array<string>,
    note: string,
    comment: string,
    source: {
      type: ExampleProposalSourceServiceModelType,
      author: string,
      title: string,
      page: number,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
      passageTitle?: string,
      publishingDate?: string
    }
    ): number {
    const newProposal = new ExampleProposalServiceModel(
      this.exampleProposalServiceModelIdentifierService.getId(),
      purpose,
      id,
      initiator,
      status,
      exampleId,
      version,
      text,
      italic,
      translations,
      keywords,
      note,
      comment,
      source
    );
    this._exampleProposals.next(this._exampleProposals.value.push(newProposal));
    return newProposal.identifier;
  }

  public loadPendingProposalsInService(userId: number): void {
    ExampleProposalServiceImplementation.getPersistentPendingProposalIds(userId).subscribe(ids => {
      let fetchedProposals: List<ExampleProposalServiceModel> = List(ids.map(() => undefined));
      let counter = 0;
      ids.forEach((id, index) => {
        ExampleProposalServiceImplementation.getPersistentExampleProposal(id).subscribe(data => {
          counter += 1;
          fetchedProposals = fetchedProposals.update(index, () => this.makeProposalFromData(data, ExampleProposalPurposeServiceModelTypes.review));
          if (counter === ids.length) {
            this._exampleProposals.next(this.makeNewProposalsWithFetchedProposals(this._exampleProposals.value, fetchedProposals));
          }
        });
      });
    });
  }

  public updateExampleProposalInService(
    identifier: number,
    text: string = this.getProposal(identifier).text,
    italic: Array<[number, number]> = this.getProposal(identifier).format.italic,
    translations: Array<string> = this.getProposal(identifier).translations,
    keywords: Array<string> = this.getProposal(identifier).keywords,
    note: string = this.getProposal(identifier).note,
    comment: string = this.getProposal(identifier).comment,
    source: {
      type: ExampleProposalSourceServiceModelType,
      author: string,
      title: string,
      page: number,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
      passageTitle?: string,
      publishingDate?: string
    } = this.getProposal(identifier).source,
    ): void {
    this._exampleProposals.next(this._exampleProposals.value.update(
      this.getProposalIndex(identifier),
      (proposal) => {
        proposal.text = text;
        proposal.format.italic = italic;
        proposal.translations = translations;
        proposal.keywords = keywords;
        proposal.note = note;
        proposal.comment = comment;
        let proposalSource;
        switch (source.type) {
          case ExampleProposalSourceServiceModelType.book: {
            proposalSource = new ExampleSourceBookServiceModel(
              source.author,
              source.title,
              source.page,
              source.initialPublishingYear,
              source.publishedYear,
              source.publishedPlace
            );
            break;
          }
          case ExampleProposalSourceServiceModelType.journal: {
            proposalSource = new ExampleSourceJournalServiceModel(
              source.author,
              source.title,
              source.page,
              source.publishingDate,
              source.passageTitle
            );
            break;
          }
        }
        proposal.source = proposalSource;
        return proposal;
      },
    ));
  }

  public removeExampleProposalInService(identifier: number): void {
    this._exampleProposals.next(this._exampleProposals.value.delete(this.getProposalIndex(identifier)));
  }

  public submitExampleProposal(identifier: number): void {
    const p = this.getProposal(identifier);
    ExampleProposalServiceImplementation.createPersistentExampleProposal(identifier).subscribe(
      () => {
        ExampleProposalServiceImplementation.getPersistentExampleProposal(p.id).subscribe(
          (data) => {
            this._exampleProposals.next(
              this._exampleProposals.value.update(
                identifier,
                () => this.makeProposalFromData(data, ExampleProposalPurposeServiceModelTypes.review)
              )
            );
          },
          () => {},
        );
      },
      () => {},
    );
  }

  public approveExampleProposal(identifier: number) {
    ExampleProposalServiceImplementation.approvePersistentExampleProposal(identifier).subscribe(
      () => {
        ExampleProposalServiceImplementation.getPersistentExampleProposal(this.getProposal(identifier).id).subscribe(
          (data) => {
            this._exampleProposals.next(
              this._exampleProposals.value.update(
                this.getProposalIndex(identifier),
                () => this.makeProposalFromData(data, ExampleProposalPurposeServiceModelTypes.display)
              )
            );
          }
          );
        },
      () => {},
      );
  }

  public rejectExampleProposal(identifier: number) {
    ExampleProposalServiceImplementation.rejectPersistentExampleProposal(identifier).subscribe(
      () => {
        ExampleProposalServiceImplementation.getPersistentExampleProposal(this.getProposal(identifier).id).subscribe(
          (data) => {
            this._exampleProposals.next(
              this._exampleProposals.value.update(
                this.getProposalIndex(identifier),
                () => this.makeProposalFromData(data, ExampleProposalPurposeServiceModelTypes.display)
              )
            );
          }
        );
      },
      () => {}
    );
  }
}
