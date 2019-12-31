import {ExampleSourceComponentTypes} from '../example-source.component.types';
import {ProposalSourceHandle} from '../../../../service/proposal';

export abstract class AbstractSourceComponent {
  protected _sourceHandle: ProposalSourceHandle;
  protected _type: ExampleSourceComponentTypes;
  protected _author: string = null;
  protected _title: string = null;
  protected _unlocked: boolean;
  // public readonly dataChange: EventEmitter<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>;
  protected constructor() {
    this._unlocked = true;
  }

  protected get unlocked() {
    return this._unlocked;
  }


  protected get type() {
    return this._type;
  }

  protected get author() {
    return this._author;
  }

  protected set author(newAuthor: string) {
    if (this.author !== newAuthor) {
      this._author = newAuthor;
      this._sourceHandle.author = newAuthor;
    }
  }

  protected get title() {
    return this._title;
  }

  protected set title(newTitle: string) {
    if (this.title !== newTitle) {
      this._title = newTitle;
      this._sourceHandle.title = newTitle;
    }
  }

  protected onAuthorChange(newAuthor: string) {
    this.author = newAuthor;
  }

  protected onTitleChange(newTitle: string) {
    this.title = newTitle;
  }
  // public abstract getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;
  //
  // public abstract update(data: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto): void;
  //
  public unlock() {
    this._unlocked = true;
  }

  public lock() {
    this._unlocked = false;
  }

}
