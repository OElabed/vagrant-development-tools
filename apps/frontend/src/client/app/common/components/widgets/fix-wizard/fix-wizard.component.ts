import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Wizard, WizardStep } from '../../../models/view/wizard.model';

@Component({
  moduleId: module.id,
  selector: 'fix-wizard',
  templateUrl: 'fix-wizard.component.html',
  styleUrls: ['fix-wizard.component.css']
})
export class FixWizardComponent implements OnChanges {
  @Input()
  wizard: Wizard;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.wizard.previousValue) {
      console.log('new value: ', this.wizard);
    }
  }
}
