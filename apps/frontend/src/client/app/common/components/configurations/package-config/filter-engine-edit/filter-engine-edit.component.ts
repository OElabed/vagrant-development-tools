import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';


/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-filter-engine-edit',
    templateUrl: 'filter-engine-edit.component.html',
    styleUrls: ['filter-engine-edit.component.css']
})
export class FilterEngineEditComponent extends BaseFormComponent implements OnInit {

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
            filterEngineOptions: this.formBuilder.group({
                fmlFile1: new FormControl(false),
                fmlFile2: new FormControl(false),
                scoreFile: new FormControl(false)
            })
        });
    }

}
