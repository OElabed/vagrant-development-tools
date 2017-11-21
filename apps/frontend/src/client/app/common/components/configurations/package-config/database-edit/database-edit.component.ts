import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-database-edit',
    templateUrl: 'database-edit.component.html',
    styleUrls: ['database-edit.component.css']
})
export class DatabaseEditComponent extends BaseFormComponent implements OnInit {

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
            dbtype: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            hostname: new FormControl('', Validators.required),
            port: new FormControl('', Validators.required),
            service: new FormControl('', Validators.required)
        });
    }

}
