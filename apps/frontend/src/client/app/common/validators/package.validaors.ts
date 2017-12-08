import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class PackageValidators {

    static version(c: FormControl): ValidationErrors {
        const value = String(c.value);
        const pattern = new RegExp('[0-9]+(\.[0-9]+)+(\.[0-9]+)+(\.[0-9]+)');
        const isValid = pattern.test(value);
        const message = {
            'version': {
                'message': 'The input must be a valid version pattern. (e.g. 5.9.0.0) '
            }
        };
        return isValid ? null : message;
    }


    static number(c: FormControl): ValidationErrors {
        const value = String(c.value);
        const pattern = new RegExp('^(0|[1-9][0-9]*)$');
        const isValid = pattern.test(value);
        const message = {
            'number': {
                'message': 'The input must be a numeric '
            }
        };
        return isValid ? null : message;
    }

}
