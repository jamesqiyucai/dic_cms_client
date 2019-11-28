import {ExampleServiceImpl} from '../example/example-service.impl';
import {TranslationService} from '../example';
import {SourceService} from '../example';
import {ProposalStatusInstruction} from './proposal-status-instruction';
import {ProposalService} from './proposal-service';

export class ProposalServiceImpl extends ExampleServiceImpl implements ProposalService {
  constructor(
    private _initiator: number,
    private _status: string,
    private _exampleID: number,
    ID: number,
    version: number,
    text: string,
    keywords: string[],
    italics: [number, number][],
    translations: TranslationService[],
    note: string,
    comment: string,
    source: SourceService
  ) {
    super(ID, version, text, keywords, italics, translations, note, comment, source);
  }
  get initiator() {
    return this._initiator;
  }
  get status() {
    return this._status;
  }
  public setStatus(newStatus: ProposalStatusInstruction) {
    this._status = newStatus.newStatus;
  }
  get exampleID() {
    return this._exampleID;
  }
}
