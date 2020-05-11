// import { Component, OnInit, Renderer2, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
// import { trigger, state, style, transition, animate, sequence, stagger, query } from '@angular/animations';
//
// @Component({
//     selector: 'app-options',
//     templateUrl: 'options.component.html',
//     styleUrls: ['options.component.css'],
//     animations: [
//         trigger('showSelectBox', [
//             state('hide', style({
//                 backgroundColor: 'white',
//                 color: 'black',
//                 opacity: 1,
//             })),
//             state('show', style({
//                 backgroundColor: 'white',
//                 color: '#FF5900',
//                 opacity: 1
//              })),
//              transition('hide => show', [
//                  style({ opacity: 0 }),
//                  animate(300)
//              ]),
//              transition('show => hide', [
//                  style({ opacity: 0 }),
//                  animate(300)
//              ])
//         ]),
//
//         trigger('displayOptions', [
//             transition(':enter', [
//                 style({ opacity: 0, transform: 'translate(0, -5%)' }),
//                 animate('0.5s ease-in', style({ opacity: 1, transform: 'none' }))
//             ]),
//             transition(':leave', [
//                 animate('0.3s ease-out', style({ opacity: 0, transform: 'translate(0, -5%)' }))
//             ]),
//         ]),
//     ],
// })
//
// export class OptionsComponent implements OnInit {
//     @ViewChild('parentBox', { static: true }) parentBox: ElementRef;
//     @ViewChild('select', { static: true }) select: ElementRef;
//
//     cur_target: ElementRef;
//     pos: string;
//     clicked = false;
//     selected = false;
//     fontStyle = 'monospace';
//     fontSize = '20px';
//     color = '#FF5900';
//
//     constructor(private renderer: Renderer2) {}
//
//     ngOnInit(): void {
//         this.cur_target = this.parentBox.nativeElement;
//         this.renderer.setStyle(this.cur_target, 'fontSize', this.fontSize);
//         this.renderer.setStyle(this.cur_target, 'fontFamily', this.fontStyle);
//     }
//
//     isClicked() {
//         this.clicked = !this.clicked;
//     }
//
//     isSelected(e) {
//         this.pos = e.target.textContent;
//         this.renderer.setProperty(this.select.nativeElement, 'textContent', this.pos);
//         this.isClicked();
//     }
// }
//
