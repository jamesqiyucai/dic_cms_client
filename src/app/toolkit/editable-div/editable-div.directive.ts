import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDivDirective implements OnChanges, OnInit {
  @Input() text = '';
  @Output() valueChange = new EventEmitter<string>();
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block');
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
    this.renderer.listen(this.el.nativeElement, 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
    this.renderer.listen(this.el.nativeElement, 'input', (e) => {
      if (
        e.inputType !== 'formatItalic'
        && e.inputType !== 'insertText'
        && e.inputType !== 'insertFromPaste'
        && e.inputType !== 'deleteContentBackward'
        && e.inputType !== 'historyUndo'
        && e.inputType !== 'insertCompositionText'
        && e.inputType !== 'insertFromYank'
      ) {
        document.execCommand('undo');
      }
    });
    this.renderer.listen(this.el.nativeElement, 'paste', (e: ClipboardEvent) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertText', false, text);
    });
    this.renderer.listen(this.el.nativeElement, 'blur', () => this.valueChange.emit(this.el.nativeElement.innerHTML));
  }

  ngOnChanges(): void {
    this.el.nativeElement.innerHTML = this.text;
  }
}
