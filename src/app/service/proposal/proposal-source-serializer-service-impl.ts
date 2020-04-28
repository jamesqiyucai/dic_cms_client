import {ProposalSourceSerializerService} from './proposal-source-serializer-service';
import {Injectable} from '@angular/core';
import {ProposalSourceSerializer} from './proposal-source-serializer';
import {ProposalBookSourceSerializer} from './proposal-book-source-serializer';
import {ProposalJournalSourceSerializer} from './proposal-journal-source-serializer';
import {ProposalSourceDocument} from './proposal-source-document';
import {ProposalSourceResourceContent} from './proposal-source-resource-content';

@Injectable()
export class ProposalSourceSerializerServiceImpl implements ProposalSourceSerializerService {
  private _serializers: ProposalSourceSerializer[];
  constructor() {
    this._serializers = [new ProposalBookSourceSerializer(), new ProposalJournalSourceSerializer()];
  }
  public getProposalSourceDocument(response: ProposalSourceResourceContent): ProposalSourceDocument {
    let document: ProposalSourceDocument | undefined;
    for (let n = 0; n < this._serializers.length; n++) {
      if (this._serializers[n].getSourceDocument(response)) {
        document = this._serializers[n].getSourceDocument(response);
        break;
      }
    }
    if (!document) {
      throw new Error(`Unable to serialize ${response}`);
    }
    return document;
  }
}
