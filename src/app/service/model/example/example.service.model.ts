import {ExampleSourceServiceModelTypes} from '../example_source/example-source.service.model.types';
import {ExampleSourceBookServiceModel} from '../example_source/example-source-book.service.model';
import {ExampleSourceJournalServiceModel} from '../example_source/example-source-journal.service.model';

export class ExampleServiceModel {
  public format: {
    italic: Array<[number, number]>
  };
  constructor(
    public readonly identifier: number,
    public id: number,
    public version: number,
    public text: string,
    italic: Array<[number, number]>,
    public translations: string[],
    public keywords: string[],
    public note: string,
    public comment: string,
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
    }
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
            source.publishedPlace,
          );
          break;
        }
        case ExampleSourceServiceModelTypes.journal: {
          this.source = new ExampleSourceJournalServiceModel(
            source.author,
            source.title,
            source.page,
            source.publishingDate,
            source.passageTitle,
          );
          break;
        }
      }
    }
  }
}
