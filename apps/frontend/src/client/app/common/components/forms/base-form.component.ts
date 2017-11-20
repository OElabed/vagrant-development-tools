import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';

export class BaseFormComponent {

    protected form: FormGroup;
    protected formSumitAttempt: boolean;

    isFieldNotValid(field: string) {
        var fieldControl = this.getFieldControl(field, this.form);
        var isValid = (
            (fieldControl.valid) ||
            (fieldControl.pristine && !this.formSumitAttempt)
        );
        return !isValid;
    }

    getFieldControl(field: string, form: AbstractControl): AbstractControl {
        var splitted = field.split('.');
        var formGroup: AbstractControl = form;
        var control: AbstractControl;
        splitted.forEach((item, index) => {
            if (index === (splitted.length - 1)) {
                control = formGroup.get(item);
            } else {
                formGroup = formGroup.get(item);
            }
        });
        return control;
    }

    displayFieldCss(field: string) {
        return {
            'has-error': this.isFieldNotValid(field),
            'has-feedback': this.isFieldNotValid(field)
        };
    }
}
