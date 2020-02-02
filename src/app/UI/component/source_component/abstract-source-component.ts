import {ExampleSourceComponentTypes} from './example-source.component.types';
import {ProposalSourceHandle} from '../../../service/proposal';
import { ChangeDetectorRef, Input, Directive } from '@angular/core';

@Directive()
export abstract class AbstractSourceComponent {
  protected _sourceHandle: ProposalSourceHandle = undefined;
  protected _type: ExampleSourceComponentTypes = undefined;
  protected _author = '';
  protected _title = '';
  protected _editable: boolean = undefined;
  // public readonly dataChange: EventEmitter<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>;
  protected constructor(private cdRef: ChangeDetectorRef) {}
  public get editable() {
    return this._editable;
  }
  @Input() public set editable(newVal: boolean) {
    if (newVal !== this._editable) {
      this._editable = newVal;
      this.cdRef.markForCheck();
    }
  }
  public get type() {
    return this._type;
  }
  public get $author() {
    return this._sourceHandle.$author;
  }
  public get author() {
    return this._author;
  }

  public set author(newAuthor: string) {
    if (this.author !== newAuthor) {
      this._author = newAuthor;
      this._sourceHandle.author = newAuthor;
    }
  }
  public get $title() {
    return this._sourceHandle.$title;
  }
  public get title() {
    return this._title;
  }

  public set title(newTitle: string) {
    if (this.title !== newTitle) {
      this._title = newTitle;
      this._sourceHandle.title = newTitle;
    }
  }

  public onAuthorChange(newAuthor: string) {
    this.author = newAuthor;
  }

  public onTitleChange(newTitle: string) {
    this.title = newTitle;
  }
  // public abstract getDto(): ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;
  //
  // public abstract update(data: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto): void;
  //
}
