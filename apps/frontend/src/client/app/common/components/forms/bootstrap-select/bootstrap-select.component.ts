import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { BootstrapSelect, Option } from '../../../models/view/bootstrap-select.model';
import { UUID } from 'angular2-uuid';

declare let jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'fix-bootstrap-select',
    templateUrl: 'bootstrap-select.component.html',
    styleUrls: ['bootstrap-select.component.css']
})
export class BootstrapSelectComponent implements AfterViewInit, OnChanges {

    @Input() selectContainer: BootstrapSelect;
    @Output() selectOption: EventEmitter<Option>;

    elementId: string;

    constructor() {
        this.selectOption = new EventEmitter<Option>();
        this.elementId = UUID.UUID();
    }

    ngAfterViewInit(): void {
        var self = this;
        jQuery('#' + self.elementId).selectpicker();
        jQuery('#' + self.elementId).on('changed.bs.select', function (e: any) {
            var selected = (jQuery('#' + self.elementId) as any).selectpicker('val');
            self.selectContainer.changeSelectedOption(selected);
            self.selectOption.emit(self.selectContainer.findSelectedOption());
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        console.debug(changes.selectContainer.currentValue);
        var self = this;
        setTimeout(() => {
            (jQuery('#' + self.elementId) as any).selectpicker('refresh');
        }, 1000);
    }

}
