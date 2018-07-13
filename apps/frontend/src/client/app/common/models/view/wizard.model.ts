export class WizardStep {

  id: string;
  order: number;
  validate: boolean;
  title: string;

  constructor(id: string, order: number, title: string, validate = false) {
    this.id = id;
    this.validate = validate;
    this.order = order;
    this.title = title;
  }
}


export interface IWizard {
  steps: WizardStep[];
}

export class Wizard implements IWizard {

  steps: WizardStep[];

  constructor(steps: WizardStep[]) {
    this.steps = steps;
  }

  public getTheNextStep(currentStep: WizardStep): WizardStep {
    let nextWizard: WizardStep;

    for (const item of this.steps) {
      if (item.order > currentStep.order) {
        nextWizard = item;
        break;
      }
    }

    if (nextWizard !== undefined && nextWizard.id !== currentStep.id) {
      return nextWizard;
    }

    return currentStep;
  }

  public getStepById(stepId: string): WizardStep {

    let step: WizardStep;

    this.steps.forEach((item, index) => {
      if (item.id === stepId) {
        step = item;
      }
    });

    return step;
  }

  public validateStep(stepId: string) {

    this.steps.forEach((item, index) => {
      if (item.id === stepId) {
        this.steps[index].validate = true;
      }
    });
  }
}

