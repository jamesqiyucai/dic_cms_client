import {Component, Output, EventEmitter, ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  template: `
    <div #container class="clickable" id="container" (click)="onClick()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>`,
  styleUrls: ['./burger-icon.component.css']
})
export class BurgerIconComponent {
  @ViewChild('container', { static: true })
  container: ElementRef;
  private expand = false;
  @Output() switch: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private renderer: Renderer2) {}
  private toggle() {
    this.expand = !this.expand;
  }
  private transform() {
    if (!this.expand) {
      this.renderer.removeClass(this.container.nativeElement, 'expand');
      // document.getElementById('container').classList.remove('expand');
      this.switch.emit(false);
    } else {
      this.renderer.addClass(this.container.nativeElement, 'expand');
      // document.getElementById('container').classList.add('expand');
      this.switch.emit(true);
    }
  }

  onClick() {
    this.toggle();
    this.transform();
  }
}
