import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { ICommonEnvConfig, IPackageFormConfig, CommonEnvConfig, PackageFormConfig } from '../../../models/view/package-config.model';
import { IAddFileFormConfig, AddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
import { FileUploaderFormConfig } from '../../../models/view/file-upload-config.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-template-config',
    templateUrl: 'template-config.component.html',
    styleUrls: ['template-config.component.css']
})
export class TemplateConfigComponent implements AfterViewInit, OnInit {

    // https://plnkr.co/edit/p0ApU2yT62jnzu9nKkng?p=preview

    @Input() package: PackageFormConfig;
    @Output() packageChange: EventEmitter<PackageFormConfig>;

    private templateForm: FormGroup;

    ngOnInit() {
        this.templateForm = new FormGroup({
            'general': new FormGroup({
                'plateform': new FormControl('', Validators.required),
                'name': new FormControl('', Validators.required)
            }),
            'coreEngine': new FormGroup({
                'version': new FormControl('', Validators.required)
            }),
            'filterEngine': new FormGroup({
                'version': new FormControl('', Validators.required),
                'filterEngineOptions': new FormGroup({
                    'fmlFile1': new FormControl(''),
                    'fmlFile2': new FormControl(''),
                    'scoreFile': new FormControl(''),
                })
            }),
            'continuityBackend': new FormGroup({
                'version': new FormControl('', Validators.required),
                'push': new FormControl('', Validators.required)
            }),
            'database': new FormGroup({
                'type': new FormGroup({
                    'oracle': new FormControl(''),
                    'sqlServer': new FormControl(''),
                    'db2': new FormControl('')
                }),
                'username': new FormControl('', Validators.required),
                'password': new FormControl('', Validators.required),
                'hostname': new FormControl('', Validators.required),
                'port': new FormControl('', Validators.required),
                'service': new FormControl('', Validators.required)
            })
        });
    }

    ngAfterViewInit(): void {
        jQuery('.selecttemplate').selectpicker();
        jQuery('.selectplateform').selectpicker();
    }

    validation(templateForm: NgForm) {
        console.log('Registration successful.');
        console.log(templateForm.value);
    }

}
