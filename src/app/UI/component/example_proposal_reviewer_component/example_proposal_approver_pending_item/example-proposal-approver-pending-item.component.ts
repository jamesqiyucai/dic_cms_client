// import {Component, EventEmitter, Input, Output} from '@angular/core';
//
// @Component({
//   selector: 'app-example-proposal-approver-pending-item',
//   template: `
//     <div (click)="onItemClick()">
//       <div>Proposer:{{proposer}}</div>
//       <div>Text:{{text}}</div>
//       <div>Comment:{{comment}}</div>
//     </div>
//   `
// })
// export class ExampleProposalApproverPendingItemComponent {
//   private _index: number;
//   private _selected: boolean;
//   private _proposer: string;
//   private _text: string;
//   private _comment: string;
//
//   @Output() private select: EventEmitter<number>;
//
//   constructor() {
//     this.select = new EventEmitter<number>();
//   }
//
//   private get selected() {
//     return this._selected;
//   }
//
//   @Input() private set selected(newState: boolean) {
//     this._selected = newState;
//   }
//
//   private get index() {
//     return this._index;
//   }
//
//   @Input() private set index(newIndex: number) {
//     this._index = newIndex;
//   }
//
//   private get proposer() {
//     return this._proposer;
//   }
//
//   @Input() private set proposer(newProposer: string) {
//     this._proposer = newProposer;
//   }
//
//   private get text() {
//     return this._text;
//   }
//
//   @Input() private set text(newText: string) {
//     this._text = newText;
//   }
//
//   private get comment() {
//     return this._comment;
//   }
//
//   @Input() private set comment(newComment: string) {
//     this._comment = newComment;
//   }
//
//   private onItemClick() {
//     this.select.emit(this.index);
//   }
//
// }
