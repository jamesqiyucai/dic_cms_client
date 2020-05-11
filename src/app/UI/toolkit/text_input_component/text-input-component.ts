import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input-component.html'
})
export class TextInputComponent {
  @Input() text: string;
  @Input() editable: boolean;
  @Output() textChange = new EventEmitter<string>();
  constructor() {
    this.text = '';
    this.editable = true;
  }
  onInput(newText: string) {
    this.text = newText;
    this.textChange.emit(this.text);
  }
}
