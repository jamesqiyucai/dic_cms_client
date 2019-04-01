import {Directive, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDivDirective {
  @Output() valueChange = new EventEmitter<string>();
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(el, 'contenteditable', true);
    this.renderer.listen(el, 'input', () => { this.valueChange.emit(el.nativeElement.innerHTML); });
    this.renderer.listen(el, 'paste', (e: ClipboardEvent) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    });
  }
}
