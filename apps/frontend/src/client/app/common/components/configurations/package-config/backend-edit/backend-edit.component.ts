import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { IModuleConfig, ModuleConfig } from '../../../../models/domain/module-config.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';
import { ModuleType } from '../../../../models/domain/module.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-backend-edit',
    templateUrl: 'backend-edit.component.html',
    styleUrls: ['backend-edit.component.css']
})
export class BackendEditComponent extends BaseFormComponent implements OnInit, OnChanges {


    @Input() config: IModuleConfig[];
    @Output() configChange: EventEmitter<IModuleConfig[]>;

    constructor(
        private formBuilder: FormBuilder
    ) {
        super();
        this.config = ModuleConfig.initializeList();
        this.configChange = new EventEmitter<IModuleConfig[]>();
    }

    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.form = this.formBuilder.group({
            version: new FormControl('', [Validators.required, PackageValidators.version]),
            modules: this.formBuilder.group({
                aquisition: new FormControl(false),
                requester: new FormControl(false),
                dbclient: new FormControl(false)
            })
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (typeof (changes['config'].currentValue) !== 'undefined') {
            this.initializeForm(this.form, this.config);
        }
    }

    initializeForm(form: FormGroup, config: IModuleConfig[]) {
        this.form.setValue({
            version: config[0].version,
            modules: {
                aquisition: ModuleConfig.moduleIsActivate(config, ModuleType.AQUISITION),
                requester: ModuleConfig.moduleIsActivate(config, ModuleType.REQUESTER),
                dbclient: ModuleConfig.moduleIsActivate(config, ModuleType.DBCLIENT)
            }
        }, { onlySelf: true });
    }

}
