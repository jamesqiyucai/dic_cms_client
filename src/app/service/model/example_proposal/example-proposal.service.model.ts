import {ExampleProposalPurposeServiceModelTypes} from './example-proposal-purpose.service.model.types';
import {ExampleProposalSourceServiceModelType} from './example-proposal-source.service.model.type';
import {ExampleSourceBookServiceModel} from './example-source-book.service.model';
import {ExampleSourceJournalServiceModel} from './example-source-journal.service.model';

export class ExampleProposalServiceModel {
  public format: {
    italic: Array<[number, number]>
  };

  public source: ExampleSourceBookServiceModel | ExampleSourceJournalServiceModel;

  constructor(
    public readonly identifier: number,
    public readonly purpose: ExampleProposalPurposeServiceModelTypes,
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
      type: ExampleProposalSourceServiceModelType,
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
        case ExampleProposalSourceServiceModelType.book: {
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
        case ExampleProposalSourceServiceModelType.journal: {
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
