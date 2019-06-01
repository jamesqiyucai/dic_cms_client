import {ExampleSourceServiceModelTypes} from './example-source.service.model.types';
import {ExampleSource} from './example-source';

export class  ExampleSourceJournalServiceModel implements ExampleSource {
  private _publishingDate: string;
  public readonly type: ExampleSourceServiceModelTypes;

  constructor(
    public author: string,
    public title: string,
    public page: number,
    publishingDate: string | number,
    public passageTitle: string,
  ) {
    this.type = ExampleSourceServiceModelTypes.journal;

    if (typeof publishingDate === 'number') {
      publishingDate = publishingDate.toString();
    }

    this._publishingDate = publishingDate;

    if (publishingDate.search(/-/g) === -1) {
      const year = publishingDate.substring(0, 4);
      const month = publishingDate.substring(4, 6);
      const day = publishingDate.substring(6);
      this._publishingDate = `${year}-${month}-${day}`;
    }
  }

  public get publishingDate() {
    return this._publishingDate;
  }

  public set publishingDate(newDate: string) {
    if (this._publishingDate !== newDate) {
      if (this.publishingDate.search(/-/g) === -1) {
        const year = newDate.substring(0, 4);
        const month = newDate.substring(4, 6);
        const day = newDate.substring(6);
        this._publishingDate = `${year}-${month}-${day}`;
      } else {
        this._publishingDate = newDate;
      }
    }
  }
}
