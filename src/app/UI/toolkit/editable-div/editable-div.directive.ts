import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2} from '@angular/core';
import {GetItalicizedRanges} from './get-italicized-ranges.function';
import {List} from 'immutable';

@Directive({
  selector: '[appEditable]'
})
export class EditableDivDirective implements OnChanges, OnInit {
  @Input() enabled: boolean;
  @Input() text = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() italicizedRanges = new EventEmitter<List<[number, number]>>();
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.enabled = true;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block');
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', `${this.enabled}`);
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
      } else if (e.target.innerHTML.includes('&nbsp;')) {
        const deleteEvent = new KeyboardEvent('keydown', {code: 'delete'});
        this.el.nativeElement.dispatchEvent(deleteEvent);
      }
    });
    this.renderer.listen(this.el.nativeElement, 'paste', (e: ClipboardEvent) => {
      e.preventDefault();
      const text = e.clipboardData?.getData('text/plain').replace(/&nbsp;/g, '').replace(/<br>/g, ' ');
      document.execCommand('insertText', false, text);
    });
    this.renderer.listen(this.el.nativeElement, 'blur', () => {
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(/&nbsp;/g, '');
      this.valueChange.emit(this.el.nativeElement.innerHTML);
      this.italicizedRanges.emit(List(GetItalicizedRanges(this.el.nativeElement)));
    });
  }


  ngOnChanges(): void {
    this.el.nativeElement.innerHTML = this.text;
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', `${this.enabled}`);
  }
}
