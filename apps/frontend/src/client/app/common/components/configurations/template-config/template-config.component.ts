import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
            'name': new FormControl('', Validators.required),
            'birthYear': new FormControl('', [Validators.required])
        });
    }

    ngAfterViewInit(): void {
        jQuery('.selecttemplate').selectpicker();
        jQuery('.selectplateform').selectpicker();
    }

}
