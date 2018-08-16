export class WizardStep {
  isValid = false;
  title: string;
  link: string;
  isCurrent: boolean;
  order: number;

  constructor(title: string, link: string, isCurrent = false) {
    this.title = title;
    this.link = link;
    this.isCurrent = isCurrent;
  }
}


export interface IWizard {
  steps?: Map<number, WizardStep>;
  size?: number;
  validateCurrentStep(): void;
  addStep(step: WizardStep): void;
  goToNextStep(): void;
  goToPreviousStep(): void;
  getOrdredList(): void;
}

export class Wizard implements IWizard {
  steps?: Map<number, WizardStep>;
  size?: number;
  currentOrder = 0;

  constructor() {
    this.steps = new Map<number, WizardStep>();
    this.size = 0;
  }

  validateCurrentStep(): void {
    const currentStep = this.steps.get(this.currentOrder);
    currentStep.isValid = true;
  }

  addStep(step: WizardStep): void {
    this.steps.set(++this.size, step);
    step.order = this.size;
    if (step.isCurrent) {
      this.currentOrder = this.size;
    }
  }

  goToNextStep(): void {
    if (this.currentOrder + 1 <= this.size && this.steps.get(this.currentOrder).isValid) {
      const fromStep = this.steps.get(this.currentOrder);
      const toStep = this.steps.get(this.currentOrder + 1);
      fromStep.isCurrent = false;
      toStep.isCurrent = true;
      this.currentOrder++;
    }
  }

  goToPreviousStep(): void {
    if (this.currentOrder - 1 >= 1) {
      const fromStep = this.steps.get(this.currentOrder);
      const toStep = this.steps.get(this.currentOrder - 1);
      fromStep.isCurrent = false;
      toStep.isCurrent = true;
      this.currentOrder--;
    }
  }

  getOrdredList(): void {
    const list = new Array<WizardStep>();
    let order = 1;
    while (order <= this.size) {
      list.push(this.steps.get(order));
      order++;
    }
  }
}

