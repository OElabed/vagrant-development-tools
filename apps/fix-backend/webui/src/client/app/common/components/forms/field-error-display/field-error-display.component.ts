import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fix-field-error-display',
    templateUrl: 'field-error-display.component.html',
    styleUrls: ['field-error-display.component.css']
})
export class FieldErrorDisplayComponent {

    @Input() errorMsg: string;
    @Input() displayError: boolean;

}
