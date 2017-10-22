import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPackage, Package, CommonEnv } from '../../models/package';
import { Wizard, WizardStep } from '../../models/wizard';

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
    jQuery('.selectpicker-version-coreengine').selectpicker();
  }

  initializeWizard() {
    this.wizard = new Wizard(['STEP-1', 'STEP-2', 'STEP-3', 'STEP-4', 'STEP-5']);
    this.currentStep = this.wizard.getStepById('STEP-1');
  }


  initializePackage() {
    this.packageConfig = new Package();
    this.packageConfig.commonEnv = new CommonEnv();
    this.packageConfig.commonEnv.enable = false;
    this.packageConfig.commonEnv.content = `// ... some code !
    package main

    import "fmt"

    // Send the sequence 2, 3, 4, ... to channel 'ch'.
    func generate(ch chan<- int) {
      for i := 2; ; i++ {
        ch <- i  // Send 'i' to channel 'ch'
      }
    }`;
  }

  // Actions

  setCommonEnv(state: boolean) {
    this.packageConfig.commonEnv.enable = state;
  }

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


