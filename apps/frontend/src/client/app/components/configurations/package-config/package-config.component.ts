import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { FileUploadConfig } from '../../../models/file-upload-config.model';
import { Package, CommonEnv } from '../../../models/package.model';
import { FileWrapper } from '../../../models/file.model';
import { State } from '../../../models/state.model';

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

    commonEnv: CommonEnv;
    commonEnvUploadConfig: FileUploadConfig;

    @Input() package: Package;
    @Output() packageChange: EventEmitter<Package>;

    constructor() {
        this.commonEnv = this.intializeCommonEnv();
        this.packageChange = new EventEmitter<Package>();
        this.commonEnvUploadConfig = this.initializeCommonEnvUploadConfig();
    }

    ngAfterViewInit(): void {
        jQuery('.selectpicker').selectpicker();
    }


    intializeCommonEnv() {
        var commonEnv = new CommonEnv();
        commonEnv.enable = false;
        commonEnv.file = new FileWrapper();
        commonEnv.file.content_text = `// ... some code !
        package main

        import "fmt"

        // Send the sequence 2, 3, 4, ... to channel 'ch'.
        func generate(ch chan<- int) {
          for i := 2; ; i++ {
            ch <- i  // Send 'i' to channel 'ch'
          }
        }`;

        return commonEnv;
    }

    setCommonEnv(state: boolean) {
        this.commonEnv.enable = state;
    }

    initializeCommonEnvUploadConfig(): FileUploadConfig {
        var config = new FileUploadConfig();

        config.url = 'http://sdfsfsdfsdfsdf';
        config.maximumSize = 32.6;
        config.maximumSizeByteType = 'Mb';
        config.extensions = ['*.fml', '*.cfg'];
        config.templateCreation = `// ... some code !
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

}
