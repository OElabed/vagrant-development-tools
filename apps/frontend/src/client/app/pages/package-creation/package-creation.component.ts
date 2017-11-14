import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { IPackageFormConfig, PackageFormConfig } from '../../common/models/view/package-config.model';
import { Wizard, WizardStep } from '../../common/models/view/wizard.model';

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
  //packageConfig: IPackageFormConfig;

  configType:string = 'TEMPLATE';

  constructor() {
    this.initializeWizard();
    //this.initializePackage();
  }

  // intialization
  ngAfterViewInit(): void {
    jQuery('.selectpicker-platform').selectpicker();
  }

  initializeWizard() {
    this.wizard = new Wizard(['STEP-1', 'STEP-2', 'STEP-3', 'STEP-4', 'STEP-5']);
    this.currentStep = this.wizard.getStepById('STEP-1');
  }


  // initializePackage() {
  //   this.packageConfig = new PackageFormConfig();
  // }

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
