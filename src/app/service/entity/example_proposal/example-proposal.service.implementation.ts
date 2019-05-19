import {Inject, Injectable} from '@angular/core';
import {ExampleProposalService} from './example-proposal.service';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {ExampleProposalServiceModel} from '../../model/example_proposal/example-proposal.service.model';
import {ExampleSourceJournalServiceModel} from '../../model/example_source/example-source-journal.service.model';
import {ExampleSourceBookServiceModel} from '../../model/example_source/example-source-book.service.model';
import {EXAMPLE_PROPOSAL_SERV_ID_SERVICE} from '../../../core/example_proposal_serv_id/injection-token';
import {ExampleProposalServiceIdentifierService} from '../../../core/example_proposal_serv_id/example-proposal-serv-id-service.interface';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {List} from 'immutable';
import {ExampleProposalPurposeServiceModelTypes} from '../../model/example_proposal/example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../../model/example_source/example-source.service.model.types';
import {ExampleProposalServiceModelTypesFactory} from '../../model/example_proposal/example-proposal.service.model.types.factory';
import {EXAMPLE_PROPOSAL_DATA_SERVICE} from '../../../data_access/service/example_proposal/injection-token';
import {ExampleProposalDataService} from '../../../data_access/service/example_proposal/example-proposal.data.service';
import * as _ from 'lodash';
import {map, mergeAll, mergeMap} from 'rxjs/operators';

@Injectable()
export class ExampleProposalServiceImplementation implements ExampleProposalService {
  private _proposals: Array<ExampleProposalServiceModel>;
  public readonly types: ExampleProposalServiceModelTypesFactory;
  private _exampleProposals: BehaviorSubject<List<ExampleProposalServiceModel>>;
  public readonly exampleProposals: Observable<List<ExampleProposalServiceModel>>;

  constructor(
    @Inject(EXAMPLE_PROPOSAL_DATA_SERVICE) private exampleProposalDataService: ExampleProposalDataService,
    @Inject(EXAMPLE_PROPOSAL_SERV_ID_SERVICE) private identifierService: ExampleProposalServiceIdentifierService,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this.types = new ExampleProposalServiceModelTypesFactory();
    this.init();
    this.exampleProposals = this._exampleProposals.asObservable();
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

  public updateView() {

  }

  // private makeModel(
  //   initiator: number,
  //   purpose: ExampleProposalPurposeServiceModelTypes,
  //   exampleId: number,
  //   version: number,
  //   text: string,
  //   italic: Array<[number, number]>,
  //   translations: Array<string>,
  //   keywords: Array<string>,
  //   note: string,
  //   comment: string,
  //   source: {
  //     type: ExampleSourceServiceModelTypes,
  //     author: string,
  //     title: string,
  //     page: number,
  //     initialPublishingYear?: number,
  //     publishedYear?: number,
  //     publishedPlace?: string,
  //     passageTitle?: string,
  //     publishingDate?: string
  //   },
  // ) {
  //   return new ExampleProposalServiceModel(
  //     this.identifierService.getId(),
  //     purpose,
  //     null,
  //     initiator,
  //     null,
  //     exampleId,
  //     version,
  //     text,
  //     italic,
  //     translations,
  //     keywords,
  //     note,
  //     comment,
  //     source,
  //     this,
  //   );
  // }
  //
  // private makeModelFromPersistentData(data: ExampleProposalData, purpose: ExampleProposalPurposeServiceModelTypes) {
  //   return new ExampleProposalServiceModel(
  //     this.identifierService.getId(),
  //     purpose,
  //     data.id,
  //     data.initiator,
  //     data.status,
  //     data.exampleId,
  //     data.version,
  //     data.text,
  //     data.format.italic,
  //     data.translations,
  //     data.keywords,
  //     data.note,
  //     data.comment,
  //     data.source,
  //     this,
  //   );
  // }

  private makeConcatenatedProposals(
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

  public removeExampleProposalInService(identifier: number): void {
    this._exampleProposals.next(this._exampleProposals.value.delete(this.getProposalIndex(identifier)));
  }

  public createExampleProposalInService(
    exampleId: number,
    version: number,
    text: string,
    italic: Array<[number, number]>,
    translations: Array<string>,
    keywords: Array<string>,
    note: string,
    comment: string,
    source: {
      type: ExampleSourceServiceModelTypes,
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
      this.identifierService.getId(),
      ExampleProposalPurposeServiceModelTypes.submit,
      null,
      this.userService.getCurrentUser(),
      null,
      exampleId,
      version,
      text,
      italic,
      translations,
      keywords,
      note,
      comment,
      source,
      this
    );
    this._exampleProposals.next(this._exampleProposals.value.push(newProposal));
    return newProposal.identifier;
  }

  public loadPendingProposalsInService(userId: number): void {
    this.exampleProposalDataService.getProposalsByReviewer(userId)
      .pipe(
        map(ids => from(ids)),
        mergeAll(),
        mergeMap(id => this.exampleProposalDataService.get(id))
      )
      .subscribe(proposal => {
        const i = this._exampleProposals.value.findIndex(model => model.id === proposal.id);
        if (i !== -1) {
          this._exampleProposals.next(
            this._exampleProposals.value.update(i, oldModel => {
              return new ExampleProposalServiceModel(
                oldModel.identifier,
                ExampleProposalPurposeServiceModelTypes.review,
                proposal.id,
                proposal.initiator,
                proposal.status,
                proposal.exampleId,
                proposal.version,
                proposal.text,
                proposal.format.italic,
                proposal.translations,
                proposal.keywords,
                proposal.note,
                proposal.comment,
                proposal.source,
                this,
              );
            }));
        } else {
          this._exampleProposals.next(
            this._exampleProposals.value.push(
              new ExampleProposalServiceModel(
                this.identifierService.getId(),
                ExampleProposalPurposeServiceModelTypes.review,
                proposal.id,
                proposal.initiator,
                proposal.status,
                proposal.exampleId,
                proposal.version,
                proposal.text,
                proposal.format.italic,
                proposal.translations,
                proposal.keywords,
                proposal.note,
                proposal.comment,
                proposal.source,
                this,
              )
            )
          );
        }
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
      type: ExampleSourceServiceModelTypes,
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

        if (source) {
          switch (source.type) {
            case ExampleSourceServiceModelTypes.book: {
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
            case ExampleSourceServiceModelTypes.journal: {
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
        } else {
          proposalSource = null;
        }



        proposal.source = proposalSource;
        return proposal;
      },
    ));
  }

  public submitExampleProposal(identifier: number): void {
    const model = _.cloneDeep(this.getProposal(identifier));
    const proposalData = this.exampleProposalDataService.makeExampleProposalData(
      model.id,
      model.initiator,
      this.userService.getCurrentUser(),
      model.status,
      model.exampleId,
      model.version,
      model.text,
      model.format.italic,
      model.translations,
      model.keywords,
      model.note,
      model.comment,
      model.source
    );
    this.exampleProposalDataService.post(proposalData)
      .pipe(
        map(id => this.exampleProposalDataService.get(id)),
        mergeAll(),
      )
      .subscribe(
        (data) => {
          const newModel = new ExampleProposalServiceModel(
            identifier,
            ExampleProposalPurposeServiceModelTypes.display,
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
            data.source,
            undefined,
          );
          this._exampleProposals.next(this._exampleProposals.value.update(this.getProposalIndex(identifier), () => newModel));
        }
      );
  }

  public approveExampleProposal(identifier: number) {
    this.exampleProposalDataService.approveProposal(this.getProposalIndex(identifier))
      .subscribe(
      () => {
        this.exampleProposalDataService.get(this.getProposal(identifier).id)
          .subscribe(
          (data) => {
            const newModel = new ExampleProposalServiceModel(
              identifier,
              ExampleProposalPurposeServiceModelTypes.display,
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
              data.source,
              undefined,
            );
            this._exampleProposals.next(this._exampleProposals.value.update(this.getProposalIndex(identifier), () => newModel));
            }
          );
        },
      () => {},
      );
  }

  public rejectExampleProposal(identifier: number) {
    this.exampleProposalDataService.rejectProposal(this.getProposalIndex(identifier))
      .subscribe(
      () => {
        this.exampleProposalDataService.get(this.getProposal(identifier).id)
          .subscribe(
          (data) => {
            const newModel = new ExampleProposalServiceModel(
              identifier,
              ExampleProposalPurposeServiceModelTypes.display,
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
              data.source,
              undefined,
            );
            this._exampleProposals.next(this._exampleProposals.value.update(this.getProposalIndex(identifier), () => newModel));
          }
        );
      },
      () => {}
    );
  }
}
