import {ExampleProposalPurposeServiceModelTypes} from './example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../example_source/example-source.service.model.types';
import {ExampleSourceBookServiceModel} from '../example_source/example-source-book.service.model';
import {ExampleSourceJournalServiceModel} from '../example_source/example-source-journal.service.model';
import {ExampleProposalService} from '../../entity/example_proposal/example-proposal.service';
import {List} from 'immutable';

export class ExampleProposalServiceModel {
  public readonly identifier: number;
  private _purpose: ExampleProposalPurposeServiceModelTypes;
  private _id: number;
  private _initiator: number;
  private _status: string;
  private _exampleId: number;
  private _version: number;
  private _text: string;
  private _italic: Array<[number, number]>;
  private _translations: Array<string>;
  private _keywords: Array<string>;
  private _note: string;
  private _comment: string;
  private _source: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel;
  private exampleProposalService: ExampleProposalService;

  constructor(
    identifier: number,
    purpose: ExampleProposalPurposeServiceModelTypes,
    id: number,
    initiator: number,
    status: string,
    exampleId: number,
    version: number,
    text: string,
    italic: List<[number, number]>,
    translations: List<string>,
    keywords: List<string>,
    note: string,
    comment: string,
    source: {
      type: string,
      author?: string,
      title?: string,
      page?: number,
      passageTitle?: string,
      publishingDate?: string,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
    },
    exampleProposalService: ExampleProposalService,
  ) {
    this.identifier = identifier;
    this._purpose = purpose;
    this._id = id;
    this._initiator = initiator;
    this._status = status;
    this._exampleId = exampleId;
    this._version = version;
    this._text = text;
    this._italic = italic.toArray();
    this._translations = translations.toArray();
    this._keywords = keywords.toArray();
    this._note = note;
    this._comment = comment;

    if (source) {
      switch (source.type) {
        case ExampleSourceServiceModelTypes.book: {
          this._source = new ExampleSourceBookServiceModel(
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
          this._source = new ExampleSourceJournalServiceModel(
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
      this._source = null;
    }

    this.exampleProposalService = exampleProposalService;
  }

  public get purpose() {
    return this._purpose;
  }

  public set purpose(newPurpose: ExampleProposalPurposeServiceModelTypes) {
    if (this._purpose !== newPurpose) {
      this._purpose = newPurpose;
      this.exampleProposalService.updateView();
    }
  }
}
