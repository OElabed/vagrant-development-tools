import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

declare let jQuery: any;

enum ConfirmType {
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

/**
 * This class represents the lazy loaded.
 */
@Component({
    moduleId: module.id,
    selector: 'confirm-form',
    templateUrl: 'confirm-form.component.html',
    styleUrls: ['confirm-form.component.css']
})
export class ConfirmFormComponent {

    @Input()
    message: string;

    @Input()
    id: string;

    @Input()
    type: ConfirmType;

    @Output() decision = new EventEmitter<boolean>();

    onConfirm(decison: boolean) {
      this.decision.emit(decison);
    }

}
