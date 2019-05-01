import {ExampleProposalPurpose} from './example-proposal.purpose';
import {ExampleProposalSourceType} from './example-proposal-source.type';
import {ExampleSourceBookServiceModel} from './example-source-book-service.model';
import {ExampleSourceJournalServiceModel} from './example-source-journal-service.model';

export class ExampleProposalServiceModel {
  public format: {
    italic: Array<[number, number]>
  };

  public source: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel;

  constructor(
    public readonly identifier: number,
    public readonly purpose: ExampleProposalPurpose,
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
      type: ExampleProposalSourceType,
      author: string,
      title: string,
      page: number,
      passageTitle?: string,
      publishingDate?: string,
      initialPublishingYear?: number;
      publishedYear?: number;
      publishedPlace?: string;
    },
  ) {
    this.format = {
      italic: []
    };
    this.format.italic = italic;
    if (source) {
      switch (source.type) {
        case ExampleProposalSourceType.book: {
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
        case ExampleProposalSourceType.journal: {
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
    }
  }
}
