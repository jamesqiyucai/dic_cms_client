import {ExampleProposalPurposeServiceModelTypes} from './example-proposal-purpose.service.model.types';
import {ExampleSourceServiceModelTypes} from '../example_source/example-source.service.model.types';
import {ExampleSourceBookServiceModel} from '../example_source/example-source-book.service.model';
import {ExampleSourceJournalServiceModel} from '../example_source/example-source-journal.service.model';
import {ExampleProposalService} from '../../entity/example_proposal/example-proposal.service';

export class ExampleProposalServiceModel {
  private exampleProposalService: ExampleProposalService;

  public format: {
    italic: Array<[number, number]>
  };

  public source: {
    type: ExampleSourceServiceModelTypes,
    author: string,
    title: string,
    page: number,
    passageTitle?: string,
    publishingDate?: string,
    initialPublishingYear?: number,
    publishedYear?: number,
    publishedPlace?: string,
  };

  constructor(
    public readonly identifier: number,
    public purpose: ExampleProposalPurposeServiceModelTypes,
    public readonly id: number,
    public readonly initiator: number,
    public status: string,
    public readonly exampleId: number,
    public version: number,
    public text: string,
    italic: Array<[number, number]>,
    public translations: string[],
    public keywords: string[],
    public note: string,
    public comment: string,
    source: {
      type: ExampleSourceServiceModelTypes,
      author: string,
      title: string,
      page: number,
      passageTitle?: string,
      publishingDate?: string,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
    },
    exampleProposalService: ExampleProposalService,
  ) {
    this.format = {
      italic: []
    };

    this.format.italic = italic;

    if (source) {
      switch (source.type) {
        case ExampleSourceServiceModelTypes.book: {
          this.source = new ExampleSourceBookServiceModel(
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
          this.source = new ExampleSourceJournalServiceModel(
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
      this.source = source;
    }

    this.exampleProposalService = exampleProposalService;
  }
}
