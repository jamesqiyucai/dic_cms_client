import {Component, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('openClose', [
      state('closedLeft', style({
        border: '#FF5900 2px solid',
        left: '-30vw'
})),
      state('openLeft', style({
        left: '0'
})),
      transition('openLeft => closedLeft', [
        animate('0.2s')
      ]),
      transition('closedLeft => openLeft', [
        animate('0.2s')
      ]),
      state('closedRight', style({
        border: '#FF5900 2px solid',
        right: '-30vw'
      })),
      state('openRight', style({
        right: '0'
      })),
      transition('openRight => closedRight', [
        animate('0.2s')
      ]),
      transition('closedRight => openRight', [
        animate('0.2s')
      ])
    ]),
  ]
})
export class SidebarComponent {
  @Input() isLeft = true;
  @Input() title: string;
  public isOpen = false;
  public toggle() {
    this.isOpen = !this.isOpen;
  }

}
