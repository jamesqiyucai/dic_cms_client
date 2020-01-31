import {ExampleSourceComponentTypes} from './example-source.component.types';
import {ProposalSourceHandle} from '../../../service/proposal';
import {ChangeDetectorRef, Input} from '@angular/core';

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
  protected get type() {
    return this._type;
  }
  protected get $author() {
    return this._sourceHandle.$author;
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
  protected get $title() {
    return this._sourceHandle.$title;
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
}
