import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input-component.html'
})
export class TextInputComponent {
  @Input() text: string;
  @Input() locked: boolean;
  @Output() textChange = new EventEmitter<string>();
  onInput(newText: string) {
    this.text = newText;
  }
}
