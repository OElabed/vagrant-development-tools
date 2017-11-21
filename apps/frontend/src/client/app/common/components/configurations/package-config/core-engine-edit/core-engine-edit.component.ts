import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-core-engine-edit',
    templateUrl: 'core-engine-edit.component.html',
    styleUrls: ['core-engine-edit.component.css']
})
export class CoreEngineEditComponent extends BaseFormComponent implements OnInit {


    constructor(
        private formBuilder: FormBuilder
    ) {
        super();
    }

    ngOnInit() {
        this.buildForm();

    }


    buildForm() {
        this.form = this.formBuilder.group({
            version: new FormControl('', [Validators.required, PackageValidators.version]),
            push: new FormControl('', [Validators.required, PackageValidators.number])
        });
    }

}
