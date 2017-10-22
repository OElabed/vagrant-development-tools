export class WizardStep {

    id: string;
    order: number;
    validate: boolean;

    constructor(id: string, order: number, validate = false) {
        this.id = id;
        this.validate = validate;
        this.order = order;
    }
}


export interface IWizard {

}

export class Wizard implements IWizard {

    steps: WizardStep[];

    constructor(steps: string[]) {
        this.steps = [];

        steps.forEach((item, index) => {
            this.steps.push(new WizardStep(item, index));
        });
    }

    public getTheNextStep(currentStep: WizardStep): WizardStep {
        var nextWizard: WizardStep;

        for (let item of this.steps) {
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

        var step: WizardStep;

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

