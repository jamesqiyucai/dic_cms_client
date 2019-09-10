import {ExampleProposalPurposeServiceModelTypes} from './example-proposal-purpose.service.model.types';
import {ExampleSourceBookServiceModel} from '../example_source/example-source-book.service.model';
import {ExampleSourceJournalServiceModel} from '../example_source/example-source-journal.service.model';
import {ExampleProposalService} from '../../entity/example_proposal/example-proposal.service';
import {List} from 'immutable';
import * as _ from 'lodash';
import {TranslationServ} from '../../translation-serv';

export class ExampleProposalServ {
  public readonly identifier: number;
  private _purpose: ExampleProposalPurposeServiceModelTypes;
  private _id: number;
  public readonly initiator: number;
  private _status: string;
  private _exampleId: number;
  private _version: number;
  private _text: string;
  private _italic: Array<[number, number]>;
  private _translations: Array<TranslationServ>;
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
    translations: List<TranslationServ>,
    keywords: List<string>,
    note: string,
    comment: string,
    source: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel,
    exampleProposalService: ExampleProposalService,
  ) {
    this.identifier = identifier;
    this._purpose = purpose;
    this._id = id;
    this.initiator = initiator;
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
      this._source = source;
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

  public get id() {
    return this._id;
  }

  public set id(newId: number) {
    if (this._id !== newId) {
      this._id = newId;
      this.exampleProposalService.updateView();
    }
  }

  public get status() {
    return this._status;
  }

  public set status(newStatus: string) {
    if (this._status !== newStatus) {
      this._status = newStatus;
      this.exampleProposalService.updateView();
    }
  }

  public get exampleId() {
    return this._exampleId;
  }

  public set exampleId(newExampleId: number) {
    if (this._exampleId !== newExampleId) {
      this._exampleId = newExampleId;
      this.exampleProposalService.updateView();
    }
  }

  public get version() {
    return this._version;
  }

  public set version(newVersion: number) {
    if (this._version !== newVersion) {
      this._version = newVersion;
      this.exampleProposalService.updateView();
    }
  }

  public get text() {
    return this._text;
  }

  public set text(newText: string) {
    if (this._text !== newText) {
      this._text = newText;
      this.exampleProposalService.updateView();
    }
  }

  public get italic() {
    return List(this._italic);
  }

  public set italic(newItalic: List<[number, number]>) {
    if (!newItalic.equals(this.italic)) {
      this._italic = newItalic.toArray();
      this.exampleProposalService.updateView();
    }
  }

  public get translations() {
    return List(this._translations.map(t => t.text));
  }

  public set translations(newTranslations: List<TranslationServ>) {
    if (!newTranslations.equals(this.translations)) {
      this._translations = newTranslations.toArray();
      this.exampleProposalService.updateView();
    }
  }

  public get keywords() {
    return List(this._keywords);
  }

  public set keywords(newKeywords: List<string>) {
    if (!newKeywords.equals(this.keywords)) {
      this._keywords = newKeywords.toArray();
      this.exampleProposalService.updateView();
    }
  }

  public get note() {
    return this._note;
  }

  public set note(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this.exampleProposalService.updateView();
    }
  }

  public get comment() {
    return this._comment;
  }

  public set comment(newComment: string) {
    if (this._comment !== newComment) {
      this._comment = newComment;
      this.exampleProposalService.updateView();
    }
  }

  public get source() {
    return _.cloneDeep(this._source);
  }

  public set source(newSource: ExampleSourceJournalServiceModel | ExampleSourceBookServiceModel) {
    if (!_.isEqual(newSource, this._source)) {
      this._source = newSource;
      this.exampleProposalService.updateView();
    }
  }
}
