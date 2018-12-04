import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-entry-name',
  template: `
    <input [value]="text" (input)="onTextChange($event.target.value)">
  `,
})
export class EntryNameComponent {
  @Input() text: string;
  @Output() textChanged: EventEmitter<string> = new EventEmitter();
  public onTextChange(newText) {
    this.textChanged.emit(newText);
  }
}
