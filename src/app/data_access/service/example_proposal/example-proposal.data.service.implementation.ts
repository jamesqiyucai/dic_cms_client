import {Injectable} from '@angular/core';
import {AbstractDataService} from '../abstract-data.service';
import {ExampleProposalData} from '../../dto/example-proposal.data';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormatData} from '../../dto/format.data';
import {BookSourceData} from '../../dto/book-source.data';
import {JournalSourceData} from '../../dto/journal-source.data';
import {Observable} from 'rxjs';
import {ExampleProposalDataService} from './example-proposal.data.service';

@Injectable()
export class ExampleProposalDataServiceImplementation
  extends AbstractDataService<ExampleProposalData>
  implements ExampleProposalDataService {
  protected domain = 'proposals';

  // private makeBookSourceData(
  //   author: string,
  //   title: string,
  //   page: number,
  //   initialPublishingYear: number,
  //   publishedYear: number,
  //   publishedPlace: string,
  // ) {
  //   return new BookSourceData(author, title, page, initialPublishingYear, publishedYear, publishedPlace);
  // }
  //
  // private makeJournalSourceData(
  //   author: string,
  //   title: string,
  //   page: number,
  //   passageTitle: string,
  //   publishingDate: string,
  // ) {
  //   return new JournalSourceData(author, title, passageTitle, publishingDate, page);
  // }
  //
  public makeExampleProposalData(
    id: number,
    initiator: number,
    reviewer: number,
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
            source.publishingDate,
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
      new FormatData(italic),
      translations,
      keywords,
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
    return this.http.post(`/api/${id}/approve`, null) as Observable<any>;
  }

  public rejectProposal(id: number) {
    return this.http.post(`/api/${id}/reject`, null) as Observable<any>;
  }

}
