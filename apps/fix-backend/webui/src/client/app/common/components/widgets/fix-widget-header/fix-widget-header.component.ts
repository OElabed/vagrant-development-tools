import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fix-widget-header',
    templateUrl: 'fix-widget-header.component.html'
})
export class FixWidgetHeaderComponent {
    @Input()
    title: string;

    @Input()
    icon: string;

    constructor() {
        this.title = '';
        this.icon = '';
    }
}
