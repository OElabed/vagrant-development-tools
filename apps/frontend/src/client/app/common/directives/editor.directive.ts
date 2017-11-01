import { Directive, ElementRef, Renderer } from '@angular/core';

declare var CodeMirror: any;

@Directive({
    selector: '[editor]'
})

export class EditorDirective {
    editor: any;
    constructor(public element: ElementRef, public renderer: Renderer) {
        this.editor = new CodeMirror.fromTextArea(element.nativeElement,
            { lineNumbers: true });
    }
}
