export class WizardStep {
  isValid = false;
  title: string;
  link: string;
  isCurrent: boolean;

  constructor(title: string, link: string, isCurrent = false) {
    this.title = title;
    this.link = link;
    this.isCurrent = isCurrent;
  }
}


export interface IWizard {
  steps?: Map<number, WizardStep>;
  size?: number;
}

export class Wizard implements IWizard {
  steps?: Map<number, WizardStep>;
  size?: number;
  currentOrder = 0;

  constructor() {
    this.steps = new Map<number, WizardStep>();
    this.size = 0;
  }

  public validateCurrentStep() {
    const currentStep = this.steps.get(this.currentOrder);
    currentStep.isValid = true;
  }

  public addStep(step: WizardStep) {
    this.steps.set(++this.size, step);
    if (step.isCurrent) {
      this.currentOrder = this.size;
    }
  }

  public goToNextStep() {
    if (this.currentOrder + 1 <= this.size && this.steps.get(this.currentOrder).isValid) {
      const fromStep = this.steps.get(this.currentOrder);
      const toStep = this.steps.get(this.currentOrder + 1);
      fromStep.isCurrent = false;
      toStep.isCurrent = true;
      this.currentOrder++;
    }
  }

  public goToPreviousStep() {
    if (this.currentOrder - 1 >= 1) {
      const fromStep = this.steps.get(this.currentOrder);
      const toStep = this.steps.get(this.currentOrder - 1);
      fromStep.isCurrent = false;
      toStep.isCurrent = true;
      this.currentOrder--;
    }
  }
}

