import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPackage, Package, CommonEnv } from '../../models/package.model';
import { Wizard, WizardStep } from '../../models/wizard.model';
import { FileWrapper } from '../../models/file.model';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

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

  uploader: FileUploader = new FileUploader({ url: URL });
  dropZoneOver: boolean = false;

  constructor() {
    this.initializeWizard();
    this.initializePackage();
  }

  // intialization
  ngAfterViewInit(): void {
    // jQuery('.selectpicker-platform').selectpicker();
    // jQuery('.selectpicker-version-coreengine').selectpicker();
  }

  initializeWizard() {
    this.wizard = new Wizard(['STEP-1', 'STEP-2', 'STEP-3', 'STEP-4', 'STEP-5']);
    this.currentStep = this.wizard.getStepById('STEP-1');
  }


  initializePackage() {
    this.packageConfig = new Package();
    this.packageConfig.commonEnv = new CommonEnv();
    this.packageConfig.commonEnv.enable = false;
    this.packageConfig.commonEnv.file = new FileWrapper();
    this.packageConfig.commonEnv.file.content_text = `// ... some code !
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

  public fileOver(e: any): void {
    this.dropZoneOver = e;
  }
}
