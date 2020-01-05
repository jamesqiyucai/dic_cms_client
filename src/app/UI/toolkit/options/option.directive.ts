import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appOption]',
})

export class OptionDirective {
    @Input() pos: string;
    @Input() hoverColor: string;

    constructor(private e: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.hoverColorSetter(this.hoverColor, 'white');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hoverColorSetter('white', 'black');
    }

    private hoverColorSetter(backgroundcolor: string, fontcolor: string) {
        this.e.nativeElement.style.backgroundColor = backgroundcolor;
        this.e.nativeElement.style.color = fontcolor;
    }
}