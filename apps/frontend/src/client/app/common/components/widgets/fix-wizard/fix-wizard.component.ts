import { Component, Input } from '@angular/core';
import { Wizard } from '../../../models/view/wizard.model';

@Component({
  moduleId: module.id,
  selector: 'fix-wizard',
  templateUrl: 'fix-wizard.component.html',
  styleUrls: ['fix-wizard.component.css']
})
export class FixWizardComponent {
  @Input()
  steps: Wizard;

}
