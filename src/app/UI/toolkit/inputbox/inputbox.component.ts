import { Component, ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-inputbox',
    templateUrl: 'inputbox.component.html',
    styleUrls: ['inputbox.component.css'],
    animations: [
        trigger('displayInput', [
            state('display', style({
                border: 'transparent',
                outline: 'none',
                color: 'black'
            })),
            state('input', style({
                border: 'solid 2px grey',
                borderRight: '0',
                borderLeft: '0',
                borderTop: '0',
                outline: 'none',
                color: '#FF5900',
            })),
            transition('display => input', [
                animate(600)
            ]),
            transition('input => display', [
                animate(300)
            ]),
        ]),
        trigger('done', [
            state('hide', style({
                visibility: 'hidden',
                opacity: 0
            })),
            state('show', style({
                visibility: 'visible',
                opacity: 1,
            })),
            transition('hide => show', [
                animate(600)
            ]),
            transition('show => hide', [
                animate(300)
            ]),
        ]),
    ],
})

export class InputboxComponent implements OnInit {
    @ViewChild('inputBox', { static: true })
    input: ElementRef;
    @ViewChild('doneBox', { static: true })
    done: ElementRef;

    private isDisplay = true;
    private cur_target: any;
    value = 'Abandon';
    fontStyle = 'monospace';
    fontSize = '20px';
    color = '#FF5900';

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {
        this.cur_target = this.input.nativeElement;
        this.renderer.setStyle(this.cur_target, 'fontSize', this.fontSize);
        this.renderer.setStyle(this.cur_target, 'fontFamily', this.fontStyle);
    }

    toggle() {
        this.isDisplay = !this.isDisplay;
        this.resize();
    }

    private resize() {
        const events = 'input'.split(' ');
        for (const e of events) {
            this.renderer.listen(this.cur_target, e, () => { this.resizeInputBox(); });
        }
        this.resizeInputBox();
    }

    private resizeInputBox() {
        this.renderer.setStyle(this.cur_target, 'width', this.cur_target.value.length + 'ch');
    }

    hoverColor(backgroundcolor: string, fontcolor: string) {
        this.renderer.setStyle(this.done.nativeElement, 'backgroundColor', backgroundcolor);
        this.renderer.setStyle(this.done.nativeElement, 'color', fontcolor);
    }
}

