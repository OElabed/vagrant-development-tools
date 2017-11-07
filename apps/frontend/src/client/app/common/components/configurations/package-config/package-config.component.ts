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
    selector: 'fix-package-config',
    templateUrl: 'package-config.component.html',
    styleUrls: ['package-config.component.css']
})
export class PackageConfigComponent implements AfterViewInit {

    commonEnvConfig: ICommonEnvConfig;
    licenceConfig: AddFileFormConfig;

    @Input() package: PackageFormConfig;
    @Output() packageChange: EventEmitter<PackageFormConfig>;


    packageConfigForm: FormGroup;

    constructor() {

        this.packageChange = new EventEmitter<PackageFormConfig>();
        this.commonEnvConfig = this.intializeCommonEnvConfig();
        this.licenceConfig = this.initializeLicenceConfig();
    }

    ngAfterViewInit(): void {
        jQuery('.selectpicker').selectpicker();
    }


    intializeCommonEnvConfig() {
        var config = new CommonEnvConfig();

        config.enable = false;
        config.fileConfig = new AddFileFormConfig();

        config.fileConfig.type = AddFileFormType.URL;
        config.fileConfig.urlFile = '';
        config.fileConfig.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileConfig.fileUploaderConfig.canCreate = true;
        config.fileConfig.fileUploaderConfig.extensions = ['*.cfg'];
        config.fileConfig.fileUploaderConfig.maximumSize = 45;
        config.fileConfig.fileUploaderConfig.maximumSizeByteType = 'Kb';
        config.fileConfig.fileUploaderConfig.urlToUpload = 'http://google';
        config.fileConfig.fileUploaderConfig.templateCreation = `// ... some code !
        package main

        import "fmt"

        // Send the sequence 2, 3, 4, ... to channel 'ch'.
        func generate(ch chan<- int) {
          for i := 2; ; i++ {
            ch <- i  // Send 'i' to channel 'ch'
          }
        }`;

        return config;
    }

    setCommonEnv() {
        this.commonEnvConfig.enable = !this.commonEnvConfig.enable;
    }

    initializeLicenceConfig(): IAddFileFormConfig {
        var config = new AddFileFormConfig();
        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Kb';
        config.fileUploaderConfig.extensions = ['*.cf'];
        config.fileUploaderConfig.canCreate = false;

        return config;
    }
}
