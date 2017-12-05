import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'fix-widget-body',
    templateUrl: 'fix-widget-body.component.html'
})
export class FixWidgetBodyComponent {
    @Input()
    loading: boolean;

    @Input()
    classes: string;

    constructor() {
        this.loading = false;
        this.classes = '';
    }
}
