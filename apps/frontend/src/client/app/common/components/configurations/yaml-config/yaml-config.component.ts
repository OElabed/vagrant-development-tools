import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { IAddFileFormConfig, AddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
import { FileUploaderFormConfig } from '../../../models/view/file-upload-config.model';

import 'codemirror/mode/yaml/yaml';
import { IPackageConfig } from '../../../models/domain/package-config.model';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-yaml-config',
    templateUrl: 'yaml-config.component.html',
    styleUrls: ['yaml-config.component.css']
})
export class YamlConfigComponent implements AfterViewInit, OnInit {

    configEditor: any = { lineNumbers: true, mode: 'text/x-yaml' };

    contentFile = '';

    @Input() packageConfig: IPackageConfig;
    @Output() packageConfigChange: EventEmitter<IPackageConfig>;

    constructor() {
        console.log();
    }

    ngOnInit(): void {
        console.log('tototototototo');
    }

    ngAfterViewInit(): void {
        jQuery('.selecttemplate').selectpicker();
        jQuery('.selectplateform').selectpicker();
    }

}
