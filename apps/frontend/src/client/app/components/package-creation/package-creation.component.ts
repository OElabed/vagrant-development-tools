import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPackage, Package, CommonEnv } from '../../models/package.model';
import { Wizard, WizardStep } from '../../models/wizard.model';
import { FileWrapper } from '../../models/file.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded PackageCreationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fix-package-creation',
  templateUrl: 'package-creation.component.html',
  styleUrls: ['package-creation.component.css']
})
export class PackageCreationComponent implements AfterViewInit {

  wizard: Wizard;
  currentStep: WizardStep;


  configEditor: any = { lineNumbers: true };
  content: string;
  packageConfig: IPackage;

  constructor() {
    this.initializeWizard();
    this.initializePackage();
  }

  // intialization
  ngAfterViewInit(): void {
    jQuery('.selectpicker-platform').selectpicker();
  }

  initializeWizard() {
    this.wizard = new Wizard(['STEP-1', 'STEP-2', 'STEP-3', 'STEP-4', 'STEP-5']);
    this.currentStep = this.wizard.getStepById('STEP-1');
  }


  initializePackage() {
    this.packageConfig = new Package();

  }

  // Actions

  changeStepWizard(stepId: string) {
    this.currentStep = this.wizard.getStepById(stepId);
  }

  goToNextStep() {
    this.wizard.validateStep(this.currentStep.id);
    if (this.currentStep.validate) {
      this.currentStep = this.wizard.getTheNextStep(this.currentStep);
    }
  }

  isDisableStep(stepId: string): boolean {
    var step = this.wizard.getStepById(stepId);
    if (!step.validate) {
      if (step.id === this.currentStep.id) {
        return false;
      }
    } else {
      return false;
    }

    return true;
  }
}
