import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { IModuleConfig, ModuleConfig } from '../../../models/view/module-config.model';
import { AddFileFormConfig, IAddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
import { FileUploaderFormConfig, IFileUploaderFormConfig } from '../../../models/view/file-upload-config.model';


/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-module-config',
    templateUrl: 'module-config.component.html',
    styleUrls: ['module-config.component.css']
})
export class ModuleConfigComponent {


    @Input() moduleConfigList: ModuleConfig[];
    @Output() moduleConfigListChange: EventEmitter<ModuleConfig[]>;

    config: IModuleConfig;

    constructor() {

        this.moduleConfigListChange = new EventEmitter<ModuleConfig[]>();
        this.config = this.initializeModuleConfig();
    }

    initializeModuleConfig(): IModuleConfig {
        var config = new ModuleConfig();

        config.archiveConfig = this.initializeArchiveConfig();

        return config;
    }


    initializeArchiveConfig(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Mb';
        config.fileUploaderConfig.extensions = ['*.zip', '*.tar.gz'];
        config.fileUploaderConfig.canCreate = false;

        return config;
    }


}
