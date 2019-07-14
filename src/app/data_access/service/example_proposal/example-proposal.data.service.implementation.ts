import {Injectable} from '@angular/core';
import {AbstractDataService} from '../abstract-data.service';
import {ExampleProposalData} from '../../dto/example-proposal.data';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormatData} from '../../dto/format.data';
import {BookSourceData} from '../../dto/book-source.data';
import {JournalSourceData} from '../../dto/journal-source.data';
import {Observable} from 'rxjs';
import {ExampleProposalDataService} from './example-proposal.data.service';
import {List} from 'immutable';

@Injectable()
export class ExampleProposalDataServiceImplementation
  extends AbstractDataService<ExampleProposalData>
  implements ExampleProposalDataService {
  protected domain = 'proposals';

  public makeExampleProposalData(
    id: number,
    initiator: number,
    reviewer: number,
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
      type: string;
      author?: string;
      title?: string;
      page?: number;
      initialPublishingYear?: number;
      publishedYear?: number;
      publishedPlace?: string;
      passageTitle?: string;
      publishingDate?: string;
    },
  ) {
    // create corresponding source
    let newSource = null;
    if (source) {
      switch (source.type) {
        case 'book': {
          newSource = new BookSourceData(
            source.author,
            source.title,
            source.page,
            source.initialPublishingYear,
            source.publishedYear,
            source.publishedPlace,
            );
          break;
        }
        case 'journal': {
          newSource = new JournalSourceData(
            source.author,
            source.title,
            source.passageTitle,
            source.publishingDate ? source.publishingDate.replace(/-/g, '') : null,
            source.page,
          );
          break;
        }
      }
    }
    return new ExampleProposalData(
      id,
      initiator,
      reviewer,
      status,
      exampleId,
      version,
      text,
      new FormatData(italic.toArray()),
      translations.toArray(),
      keywords.toArray(),
      note,
      comment,
      newSource,
    );
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getProposalsByReviewer(reviewer: number) {
    const params = new HttpParams().set('reviewer', reviewer.toString());
    return this.http.get(`/api/${this.domain}`, {params: params}) as Observable<Array<number>>;
  }

  public approveProposal(id: number) {
    return this.http.post(`/api/${this.domain}/${id}/approve`, null) as Observable<any>;
  }

  public rejectProposal(id: number) {
    return this.http.post(`/api/${this.domain}/${id}/reject`, null) as Observable<any>;
  }

}
