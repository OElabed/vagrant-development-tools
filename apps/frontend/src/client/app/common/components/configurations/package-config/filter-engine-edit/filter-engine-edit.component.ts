import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFormComponent } from '../../../forms/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PackageValidators } from '../../../../validators/package.validaors';
import { IFilterEngineConfig, FilterEngineConfig } from '../../../../models/domain/filter-engine-config.model';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup } from '@angular/forms/src/model';


/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-filter-engine-edit',
    templateUrl: 'filter-engine-edit.component.html',
    styleUrls: ['filter-engine-edit.component.css']
})
export class FilterEngineEditComponent extends BaseFormComponent implements OnInit, OnChanges {

    @Input() config: IFilterEngineConfig;
    @Output() configChange: EventEmitter<IFilterEngineConfig>;

    constructor(
        private formBuilder: FormBuilder
    ) {
        super();
        this.config = FilterEngineConfig.initialize();
        this.configChange = new EventEmitter<IFilterEngineConfig>();
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

    ngOnChanges(changes: SimpleChanges) {
        if (typeof (changes['config'].currentValue) !== 'undefined') {
            this.initializeForm(this.form, this.config);
        }
    }

    initializeForm(form: FormGroup, config: IFilterEngineConfig) {
        this.form.setValue({
            version: config.version,
            filterEngineOptions: {
                fmlFile1: config.fmlFile1Url !== '',
                fmlFile2: config.fmlFile2Url !== '',
                scoreFile: config.scoreFileUrl !== ''
            }
        }, { onlySelf: true });
    }

}
