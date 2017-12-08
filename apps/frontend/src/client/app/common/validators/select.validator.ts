import { FormArray, FormControl, FormGroup, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

import { Option } from '../models/view/bootstrap-select.model';

export class SelectValidators {

    static required(option: Option): ValidatorFn {

        return (control: AbstractControl): { [key: string]: any } => {

            const message = {
                'notNull': {
                    'message': 'None of options is selected'
                }
            };
            return option === null ? message : null;
        };
    }

}
