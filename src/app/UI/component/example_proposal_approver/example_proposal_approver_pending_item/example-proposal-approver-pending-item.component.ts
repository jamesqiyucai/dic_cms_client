import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {USER_SERVICE} from '../../../../core/user/injection-token';
import {UserService} from '../../../../core/user/user-service.interface';

@Component({
  selector: 'app-example-proposal-approver-pending-item',
  template: './example-proposal-approver-pending-item.component.html'
})
export class ExampleProposalApproverPendingItemComponent {
  private _index: number;
  private _selected: boolean;
  private _proposer: string;
  private _text: string;
  private _comment: string;

  @Output() private select: EventEmitter<number>;

  constructor() {
    this.select = new EventEmitter<number>();
  }

  private get selected() {
    return this._selected;
  }

  private set selected(newState: boolean) {
    this._selected = newState;
  }

  private get index() {
    return this._index;
  }

  @Input() private set index(newIndex: number) {
    this._index = newIndex;
  }

  private get proposer() {
    return this._proposer;
  }

  @Input() private set proposer(newProposer: string) {
    this._proposer = newProposer;
  }

  private get text() {
    return this._text;
  }

  @Input() private set text(newText: string) {
    this._text = newText;
  }

  private get comment() {
    return this._comment;
  }

  @Input() private set comment(newComment: string) {
    this._comment = newComment;
  }

  public cancelFocus() {
    this.selected = false;
  }
}
