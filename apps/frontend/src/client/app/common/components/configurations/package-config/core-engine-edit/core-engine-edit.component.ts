import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';
import { ICoreEngineConfig, CoreEngineConfig } from '../../../../models/domain/core-engine-config.model';
import { FormGroup } from '@angular/forms/src/model';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-core-engine-edit',
    templateUrl: 'core-engine-edit.component.html',
    styleUrls: ['core-engine-edit.component.css']
})
export class CoreEngineEditComponent extends BaseFormComponent implements OnInit, OnChanges {


    @Input() config: ICoreEngineConfig;
    @Output() configChange: EventEmitter<ICoreEngineConfig>;

    constructor(
        private formBuilder: FormBuilder
    ) {
        super();
        this.config = CoreEngineConfig.initialize();
        this.configChange = new EventEmitter<ICoreEngineConfig>();
    }

    ngOnInit() {
        this.buildForm();

    }


    buildForm() {
        this.form = this.formBuilder.group({
            version: new FormControl('', [Validators.required, PackageValidators.version]),
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (typeof (changes['config'].currentValue) !== 'undefined') {
            this.initializeForm(this.form, this.config);
        }
    }

    initializeForm(form: FormGroup, config: ICoreEngineConfig) {
        this.form.setValue({
            version: config.version,
        }, { onlySelf: true });
    }

}
