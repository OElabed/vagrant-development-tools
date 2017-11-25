import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';
import { IDatabaseConfig, DatabaseConfig } from '../../../../models/domain/database-config.model';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup } from '@angular/forms/src/model';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-database-edit',
    templateUrl: 'database-edit.component.html',
    styleUrls: ['database-edit.component.css']
})
export class DatabaseEditComponent extends BaseFormComponent implements OnInit, OnChanges {

    @Input() config: IDatabaseConfig;
    @Output() configChange: EventEmitter<IDatabaseConfig>;

    constructor(
        private formBuilder: FormBuilder
    ) {
        super();
        this.config = DatabaseConfig.initialize();
        this.configChange = new EventEmitter<IDatabaseConfig>();
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

    ngOnChanges(changes: SimpleChanges) {
        if (typeof (changes['config'].currentValue) !== 'undefined') {
            this.initializeForm(this.form, this.config);
        }
    }

    initializeForm(form: FormGroup, config: IDatabaseConfig) {
        this.form.setValue({
            dbtype: config.type,
            username: config.username,
            password: config.password,
            hostname: config.hostname,
            port: config.port,
            service: config.service
        }, { onlySelf: true });
    }

}
