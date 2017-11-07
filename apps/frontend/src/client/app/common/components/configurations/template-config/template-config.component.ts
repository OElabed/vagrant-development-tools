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
export class TemplateConfigComponent implements AfterViewInit {


    @Input() package: PackageFormConfig;
    @Output() packageChange: EventEmitter<PackageFormConfig>;

    constructor() {
        console.log();
    }

    ngAfterViewInit(): void {
        jQuery('.selecttemplate').selectpicker();
        jQuery('.selectplateform').selectpicker();
    }

}
