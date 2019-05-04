import {ExampleSourceJournalServiceModel} from '../example_proposal/example-source-journal.service.model';
import {ExampleSourceBookServiceModel} from '../example_proposal/example-source-book.service.model';

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
    public source: ExampleSourceJournalServiceModel & ExampleSourceBookServiceModel
) {
    this.format.italic = italic;
  }
}
